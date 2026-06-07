---
name: opsx-sync-specs
description: Sync delta specs to main specs.
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

# OpenSpec Sync Specs Skill

Sync delta specs from a change to main specs with intelligent merging.

## Commands

- `/opsx:sync` - Sync delta specs to main specs

## Steps

1. **Prompt for change selection** - Use AskUserQuestion tool
2. **Find delta specs** - Look in openspec/changes/<name>/specs/*/spec.md
3. **Apply changes intelligently** - For each capability:
   - Read delta spec to understand changes
   - Read main spec (if exists)
   - Apply ADDED/MODIFIED/REMOVED/RENAMED requirements
   - Create new main spec if capability doesn't exist
4. **Show summary** - What was updated

## Delta Spec Format

```markdown
## ADDED Requirements
## MODIFIED Requirements
## REMOVED Requirements
## RENAMED Requirements
```

## Intelligent Merging

- ADDED: Add if doesn't exist, update if exists
- MODIFIED: Apply changes, preserve existing content
- REMOVED: Remove entire requirement block
- RENAMED: Find FROM requirement, rename to TO

## Guardrails

- Read both delta and main specs before making changes
- Preserve existing content not mentioned in delta
- If unclear, ask for clarification
- Show what you're changing as you go
- Operation should be idempotent