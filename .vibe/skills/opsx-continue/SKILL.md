---
name: opsx-continue
description: Continue working on an OpenSpec change.
license: MIT
compatibility: Mistral Vibe
user-invocable: true
allowed-tools:
  - read_file
  - write_file
  - bash
  - ask_user_question
---

# OpenSpec Continue Change Skill

Continue working on a change by creating the next artifact.

## Commands

- `/opsx:continue` - Continue working on an existing change

## Steps

1. **Prompt for change selection** - Use AskUserQuestion tool
2. **Check current status** - `openspec status --change "<name>" --json`
3. **Create next ready artifact** - Follow dependency order
4. **Show progress** - `openspec status --change "<name>"`

## Artifact Creation

- Create ONE artifact per invocation
- Always read dependency artifacts before creating new ones
- Never skip artifacts or create out of order
- If context unclear, ask user before creating
- Verify artifact file exists after writing

## Guardrails

- Create ONE artifact per invocation
- Always read dependency artifacts before creating a new one
- Never skip artifacts or create out of order
- If context is unclear, ask the user before creating
- Verify the artifact file exists after writing before marking progress
- Use the schema's artifact sequence, don't assume specific artifact names
- Context and rules are constraints for YOU, not content for the file