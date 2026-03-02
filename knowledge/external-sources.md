# External Sources — Encompass / ICE Mortgage Technology

Curated URLs for Encompass documentation. Agents should reference these when internal knowledge articles don't fully answer a question.

## Tier 1 — Official ICE Documentation

| Source | URL | Auth Required | Best For |
|--------|-----|---------------|----------|
| **Developer Connect (API docs)** | https://developer.icemortgagetechnology.com/developer-connect/docs | No | API reference, SDK migration, custom forms, scripting, webhooks |
| **Developer Connect API Reference** | https://developer.icemortgagetechnology.com/developer-connect/reference | No | REST API endpoints, request/response schemas |
| **ICE Resource Center** | https://resourcecenter.elliemae.com/resourcecenter/encompass.aspx | **Yes** (ICE login) | Admin guides, knowledge articles, release notes, how-tos |
| **ICE Help Documentation** | https://help.icemortgagetechnology.com/documentation/encompass/ | Partial | Product manuals, PDF guides, setup docs |
| **ICE Community / Forums** | https://ice-em.my.site.com/s/ | **Yes** (ICE login) | Peer Q&A, real-world configs, troubleshooting |

## Tier 2 — Developer-Specific

| Source | URL | Auth Required | Best For |
|--------|-----|---------------|----------|
| **Custom Forms Guide** | https://developer.icemortgagetechnology.com/developer-connect/docs/custom-forms | No | Building custom input forms for Encompass Web |
| **SSF (Secure Scripting)** | https://developer.icemortgagetechnology.com/developer-connect/docs/the-ellie-mae-scripting-framework | No | JavaScript scripting in Encompass forms |
| **Scripting Objects Ref** | https://developer.icemortgagetechnology.com/developer-connect/docs/ellie-mae-scripting-objects-reference | No | `ell`, `Loan`, `Field`, `Form` objects |
| **Event Reference** | https://developer.icemortgagetechnology.com/developer-connect/docs/event-reference-for-custom-forms | No | `onload`, `onclick`, `onchange` events |
| **Debugging JS** | https://developer.icemortgagetechnology.com/developer-connect/docs/debugging-javascript-code-for-encompass | No | DevTools for Encompass Web custom forms |
| **Loan Folders (API)** | https://developer.icemortgagetechnology.com/developer-connect/docs/ucm-loan-folders | No | Loan folder API operations |
| **Webhooks Best Practices** | https://developer.icemortgagetechnology.com/developer-connect/docs/webhooks-bp | No | Event-driven integrations |
| **Enhanced Conditions** | https://resourcecenter.elliemae.com/resourcecenter/knowledgebasearticle.aspx?n=36870 | **Yes** | Enhanced Conditions setup (auth-walled) |

## Tier 3 — Community & Third-Party

| Source | URL | Auth Required | Best For |
|--------|-----|---------------|----------|
| **ICE Developer Forum** | https://developer.icemortgagetechnology.com/developer-connect/page/developer-forum | Yes (free signup) | Technical Q&A with ICE engineers |
| **Encompass subreddit** | https://reddit.com/r/encompass | No | Peer discussions (low volume) |
| **ICE Mortgage YouTube** | https://youtube.com/@ICEMortgageTechnology | No | Training videos, webinars |

## Auth-Walled Content — Proxy Fetch

Many key resources (Resource Center, Community Forums, Enhanced Conditions guide) require ICE login. Use the credential proxy:

```bash
node C:/Dev/TeamAI/scripts/ice-fetch.js <url>
```

The script authenticates via `idp.elliemae.com` using credentials in `.env` (which you NEVER read directly). It returns page text to stdout.

**Setup (one-time, per team member):**
1. `cd C:\Dev\TeamAI && npm install && npx playwright install chromium`
2. Copy `.env.template` to `.env` and fill in ICE credentials

**If ice-fetch fails** (no `.env`, wrong creds, site down):
1. Note the URL and article number in the response
2. Tell the user the specific Resource Center article # to look up
3. Suggest the user paste relevant content into a new knowledge article

## URL Patterns

Useful for constructing searches:
- Resource Center article: `https://resourcecenter.elliemae.com/resourcecenter/knowledgebasearticleGAIA.aspx?n={ARTICLE_NUMBER}`
- Resource Center article (legacy): `https://resourcecenter.elliemae.com/resourcecenter/knowledgebasearticle.aspx?n={ARTICLE_NUMBER}`
- Developer Connect guide: `https://developer.icemortgagetechnology.com/developer-connect/docs/{slug}`
- Developer Connect API ref: `https://developer.icemortgagetechnology.com/developer-connect/reference/{slug}`
- ICE Help PDF: `https://help.icemortgagetechnology.com/documentation/encompass/documents/guides-and-manuals/{category}/{filename}.pdf`
