---
name: opsx-new
description: Start a new OpenSpec change.
license: MIT
compatibility: Mistral Vibe
user-invocable: true
allowed-tools:
  - read_file
  - write_file
  - bash
  - ask_user_question
---

# OpenSpec New Change Skill

Start a new change using the experimental artifact-driven approach.

## Commands

- `/opsx:new` - Start a new OpenSpec change

## Steps

1. **Ask what they want to build** - Use AskUserQuestion tool if unclear
2. **Determine workflow schema** - Use default unless user specifies
3. **Create change directory** - `openspec new change "<name>"`
4. **Show artifact status** - `openspec status --change "<name>"`
5. **Get instructions for first artifact** - `openspec instructions <artifact-id> --change "<name>"`
6. **Stop and wait for user direction** - Don't create artifacts yet

## Guardrails

- Do NOT create any artifacts yet - just show the instructions
- Do NOT advance beyond showing the first artifact template
- If name is invalid (not kebab-case), ask for a valid name
- If change exists, suggest continuing that change instead
- Pass --schema if using a non-default workflow