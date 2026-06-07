---
name: opsx-archive
description: Archive a completed change.
license: MIT
compatibility: Mistral Vibe
user-invocable: true
allowed-tools:
  - read_file
  - bash
  - ask_user_question
---

# OpenSpec Archive Change Skill

Archive a completed change in the experimental workflow.

## Commands

- `/opsx:archive` - Archive a completed change

## Steps

1. **Prompt for change selection** - Use AskUserQuestion tool
2. **Check artifact completion** - `openspec status --change "<name>" --json`
3. **Check task completion** - Read tasks.md for incomplete tasks
4. **Assess delta spec sync** - Check for delta specs and prompt for sync
5. **Perform archive** - Move to openspec/changes/archive/YYYY-MM-DD-<name>/
6. **Display summary** - Show archive completion details

## Guardrails

- Always prompt for change selection if not provided
- Use artifact graph (openspec status --json) for completion checking
- Don't block archive on warnings - just inform and confirm
- Preserve .openspec.yaml when moving to archive
- Show clear summary of what happened
- If sync is requested, use openspec-sync-specs approach
- If delta specs exist, always run sync assessment before prompting