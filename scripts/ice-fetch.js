#!/usr/bin/env node
/**
 * ice-fetch.js — Authenticated proxy for ICE/Encompass web content.
 *
 * Logs into idp.elliemae.com via Playwright, navigates to the target URL,
 * extracts text content, and prints it to stdout.
 *
 * The agent calls this script; it NEVER sees the credentials in .env.
 *
 * Usage:
 *   node scripts/ice-fetch.js <url>
 *   node scripts/ice-fetch.js https://resourcecenter.elliemae.com/resourcecenter/knowledgebasearticle.aspx?n=36870
 *
 * Environment (.env in repo root):
 *   ICE_INSTANCE_ID=BE11146040
 *   ICE_USERNAME=admin
 *   ICE_PASSWORD=...
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const { chromium } = require('playwright');

const IDP_HOST = 'idp.elliemae.com';
const LOGIN_TIMEOUT = 30000;
const PAGE_TIMEOUT = 20000;

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error('Usage: node scripts/ice-fetch.js <url>');
    process.exit(1);
  }

  const { ICE_INSTANCE_ID, ICE_USERNAME, ICE_PASSWORD } = process.env;
  if (!ICE_INSTANCE_ID || !ICE_USERNAME || !ICE_PASSWORD) {
    console.error('Missing credentials. Copy .env.template to .env and fill in values.');
    process.exit(1);
  }

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to target — if auth-walled, IDP login will appear
    console.error(`[ice-fetch] Navigating to: ${url}`);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: PAGE_TIMEOUT });

    // Check if we landed on the IDP login page
    if (page.url().includes(IDP_HOST)) {
      console.error('[ice-fetch] IDP login detected — authenticating...');
      await doLogin(page);
      console.error('[ice-fetch] Login successful — waiting for redirect...');

      // Wait for navigation away from IDP
      await page.waitForURL(u => !u.toString().includes(IDP_HOST), { timeout: LOGIN_TIMEOUT });

      // Some sites do a second redirect — give it a moment
      await page.waitForLoadState('domcontentloaded', { timeout: PAGE_TIMEOUT });
    }

    // Wait for main content to settle
    await page.waitForTimeout(2000);

    // Extract useful text content (skip nav/footer noise)
    const content = await extractContent(page);

    // Output to stdout — this is what the agent sees
    console.log(content);

  } catch (err) {
    console.error(`[ice-fetch] Error: ${err.message}`);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
  }
}

/**
 * Fill the IDP login form and submit.
 * Form fields: Instance ID, Username (User ID), Password.
 */
async function doLogin(page) {
  // The IDP form has three text inputs and a Login button.
  // Based on observed form: inputs are in order (instance, username, password).
  // Try known selectors first, fall back to positional.
  const instanceSel = 'input[name="instanceId"], input[name="InstanceId"], input[placeholder*="Instance"], input[id*="instance"], input[id*="Instance"]';
  const userSel = 'input[name="userName"], input[name="UserName"], input[name="userId"], input[placeholder*="User"], input[id*="user"], input[id*="User"]';
  const passSel = 'input[type="password"]';
  const loginSel = 'button:has-text("Login"), input[type="submit"][value="Login"], button[type="submit"]';

  // Wait for form to appear
  await page.waitForSelector(passSel, { timeout: LOGIN_TIMEOUT });

  // Try specific selectors, fall back to all visible text inputs
  let instanceInput = await page.$(instanceSel);
  let userInput = await page.$(userSel);

  if (!instanceInput || !userInput) {
    // Fallback: get all visible text inputs in order
    const textInputs = await page.$$('input[type="text"]:visible, input:not([type]):visible');
    if (textInputs.length >= 2) {
      instanceInput = instanceInput || textInputs[0];
      userInput = userInput || textInputs[1];
    }
  }

  if (!instanceInput || !userInput) {
    throw new Error('Could not locate login form fields on IDP page');
  }

  // Fill fields
  await instanceInput.fill(process.env.ICE_INSTANCE_ID);
  await userInput.fill(process.env.ICE_USERNAME);
  await page.fill(passSel, process.env.ICE_PASSWORD);

  // Click login
  const loginBtn = await page.$(loginSel);
  if (loginBtn) {
    await loginBtn.click();
  } else {
    // Fallback: press Enter on password field
    await page.press(passSel, 'Enter');
  }

  // Wait for either redirect or error
  await Promise.race([
    page.waitForURL(u => !u.toString().includes(IDP_HOST), { timeout: LOGIN_TIMEOUT }),
    page.waitForSelector('.error, .alert-danger, .login-error', { timeout: 5000 }).then(() => {
      throw new Error('Login failed — check credentials in .env');
    }).catch(err => {
      if (err.message.includes('Login failed')) throw err;
      // Selector timeout is fine — means no error shown
    })
  ]);
}

/**
 * Extract meaningful text content from the page.
 * Strips navigation, headers, footers, and scripts.
 */
async function extractContent(page) {
  return await page.evaluate(() => {
    // Remove noise elements
    const noiseSelectors = [
      'nav', 'header', 'footer',
      '[role="navigation"]', '[role="banner"]',
      '.nav', '.navbar', '.sidebar', '.breadcrumb',
      '.cookie-banner', '.modal', '#cookie-consent',
      'script', 'style', 'noscript', 'iframe'
    ];
    noiseSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.remove());
    });

    // Try known content containers first
    const contentSelectors = [
      'main', 'article',
      '[role="main"]',
      '.content', '.main-content', '.article-content',
      '.kb-article', '.knowledge-article',
      '#content', '#main-content',
      '.doc-content', '.documentation'
    ];
    for (const sel of contentSelectors) {
      const el = document.querySelector(sel);
      if (el && el.innerText.trim().length > 100) {
        return el.innerText.trim();
      }
    }

    // Fallback: body text
    return document.body.innerText.trim();
  });
}

main();
