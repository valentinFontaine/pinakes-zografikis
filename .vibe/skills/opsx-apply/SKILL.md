---
name: opsx-apply 
description: Implement tasks from an OpenSpec change.
license: MIT
compatibility: Mistral Vibe
user-invocable: true
allowed-tools:
  - read_file
  - write_file
  - grep
  - bash
  - search_replace
  - ask_user_question
---

# OpenSpec Apply Change Skill

Implement tasks from an OpenSpec change.

## Commands

- `/opsx-apply` - Implement tasks from a change

## Steps

1. **Select the change** - Prompt if not specified
2. **Check status** - `openspec status --change "<name>" --json`
3. **Get apply instructions** - `openspec instructions apply --change "<name>" --json`
4. **Read context files** - From instructions output
5. **Show current progress** - Tasks completed/remaining
6. **Implement tasks** - Loop until done or blocked
7. **Show status on completion/pause**

## Guardrails

- Keep going through tasks until done or blocked
- Always read context files before starting
- If task is ambiguous, pause and ask before implementing
- If implementation reveals issues, pause and suggest artifact updates
- Keep code changes minimal and scoped to each task
- Update task checkbox immediately after completing each task
- Pause on errors, blockers, or unclear requirements - don't guess
- Use contextFiles from CLI output, don't assume specific file names
