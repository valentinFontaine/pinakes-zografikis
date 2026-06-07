---
name: opsx-bulk-archive
description: Archive multiple completed changes at once.
license: MIT
compatibility: Mistral Vibe
user-invocable: true
allowed-tools:
  - read_file
  - bash
  - ask_user_question
---

# OpenSpec Bulk Archive Change Skill

Archive multiple completed changes in a single operation with intelligent spec conflict resolution.

## Commands

- `/opsx:bulk-archive` - Archive multiple changes at once

## Steps

1. **Get active changes** - `openspec list --json`
2. **Prompt for selection** - Use AskUserQuestion tool with multi-select
3. **Batch validation** - Gather status for all selected changes
4. **Detect spec conflicts** - Build capability → changes map
5. **Resolve conflicts** - Investigate codebase for implementation evidence
6. **Show consolidated status** - Display table with resolutions
7. **Confirm batch operation** - Single confirmation for entire batch
8. **Execute archive** - Process in resolved order
9. **Display summary** - Show all outcomes

## Conflict Resolution

- Only one implemented: Sync that change's specs
- Both implemented: Apply in chronological order
- Neither implemented: Skip spec sync, warn user

## Guardrails

- Allow any number of changes (1+ is fine)
- Always prompt for selection, never auto-select
- Detect spec conflicts early and resolve by checking codebase
- When both changes are implemented, apply specs in chronological order
- Skip spec sync only when implementation is missing (warn user)
- Show clear per-change status before confirming
- Use single confirmation for entire batch
- Track and report all outcomes (success/skip/fail)
- Preserve .openspec.yaml when moving to archive
- Archive directory target uses current date: YYYY-MM-DD-<name>
- If archive target exists, fail that change but continue with others