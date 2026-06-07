---
name: opsx-verify
description: Verify implementation against change artifacts.
license: MIT
compatibility: Mistral Vibe
user-invocable: true
allowed-tools:
  - read_file
  - grep
  - bash
  - ask_user_question
---

# OpenSpec Verify Change Skill

Verify that an implementation matches the change artifacts (specs, tasks, design).

## Commands

- `/opsx:verify` - Verify implementation against change artifacts

## Steps

1. **Prompt for change selection** - Use AskUserQuestion tool
2. **Check status** - `openspec status --change "<name>" --json`
3. **Get instructions** - `openspec instructions apply --change "<name>" --json`
4. **Initialize verification report** - Completeness, Correctness, Coherence
5. **Verify Completeness** - Task completion and spec coverage
6. **Verify Correctness** - Requirement implementation and scenario coverage
7. **Verify Coherence** - Design adherence and pattern consistency
8. **Generate report** - Summary scorecard with issues by priority

## Verification Dimensions

- **Completeness**: Task completion, requirement coverage
- **Correctness**: Implementation matches requirements, scenario coverage
- **Coherence**: Design adherence, pattern consistency

## Guardrails

- If no change name provided, prompt for selection
- Use artifact graph (openspec status --json) for completion checking
- Don't block on warnings - just inform
- Show clear summary of what was found
- Every issue must have specific, actionable recommendation
- Use code references in format: file.ts:123