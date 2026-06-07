---
name: opsx-ff-change
description: Fast-forward through artifact creation.
license: MIT
compatibility: Mistral Vibe
user-invocable: true
allowed-tools:
  - read_file
  - write_file
  - bash
  - ask_user_question
---

# OpenSpec Fast-Forward Change Skill

Fast-forward through artifact creation - generate everything needed to start implementation in one go.

## Commands

- `/opsx:ff` - Fast-forward through artifact creation

## Steps

1. **Ask what they want to build** - Use AskUserQuestion tool if unclear
2. **Create change directory** - `openspec new change "<name>"`
3. **Get artifact build order** - `openspec status --change "<name>" --json`
4. **Create artifacts in sequence** - Until apply-ready:
   - Get instructions for each ready artifact
   - Read dependency artifacts for context
   - Create artifact using template structure
   - Show progress: "✓ Created <artifact-id>"
5. **Show final status** - `openspec status --change "<name>"`

## Artifact Creation

- Follow instruction field from openspec instructions
- Schema defines what each artifact should contain
- Read dependency artifacts for context
- Use template as structure for output file
- Context and rules are constraints for YOU, not content for file

## Guardrails

- Create ALL artifacts needed for implementation
- Always read dependency artifacts before creating new ones
- If context critically unclear, ask user
- If change exists, suggest continuing that change instead
- Verify each artifact file exists after writing