# How to Ask Questions

TeamAI uses VS Code + GitHub Copilot to give you AI-powered answers drawn from 12,700+ knowledge sources.

## Opening Copilot Chat

1. Open VS Code with the TeamAI workspace (`TeamAI.code-workspace`)
2. Press `Ctrl+Shift+I` or click the Copilot icon in the sidebar
3. Type your question naturally

## Example Questions

### Encompass Configuration
- "How do I set up automated document assignment in Encompass?"
- "What are the business rules for lock request conditions?"
- "How do I configure the TRID disclosure timeline?"

### Field IDs
- "What is the field ID for the borrower's annual income?"
- "Show me all HMDA-related field IDs"
- "What fields are on the 1003 page 1?"

### Admin Tasks
- "How do I create a new custom input form?"
- "What's the process for setting up a new persona?"
- "How do I export settings from one Encompass instance to another?"

### Troubleshooting
- "Users are getting a 'field locked' error on the URLA form. What causes this?"
- "The automatic merge tool isn't running. What should I check?"

## Tips for Better Results

| Do | Don't |
|----|-------|
| Be specific: "field ID for borrower annual income" | Be vague: "income field" |
| Include context: "on the URLA page 1" | Leave out where you are |
| Ask one question at a time | Ask 5 questions in one message |
| Mention the version if relevant | Assume the AI knows your version |

## What Sources It Searches

The AI automatically searches (in order):
1. **Local knowledge articles** in `knowledge/` folder
2. **MasteringEncompass** — 11,657 indexed forum articles
3. **EllieForum** — 1,018 community posts
4. **SharePoint/OneDrive** — company training docs and playbooks
5. **Encompass REST API** — live instance data (if configured)

## If the Answer Is Wrong

- Ask for sources: "Where did you find that?"
- Redirect: "Search MasteringEncompass for [topic]"
- Report it: Tell Steve so we can add a correction to the knowledge base
