---
name: opsx-onboard
description: Guided OpenSpec onboarding.
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

# OpenSpec Onboard Skill

Guide the user through their first complete OpenSpec workflow cycle with real codebase work.

## Commands

- `/opsx:onboard` - Start guided OpenSpec onboarding

## Phases

1. **Welcome** - Explain what will be covered
2. **Task Selection** - Find small real task in codebase
3. **Explore Demo** - Show explore mode briefly
4. **Create Change** - Create change container
5. **Proposal** - Capture WHY
6. **Specs** - Define WHAT
7. **Design** - Decide HOW
8. **Tasks** - Break into steps
9. **Apply** - Implement tasks
10. **Archive** - Preserve record
11. **Recap** - Summary and next steps

## Guardrails

- Follow EXPLAIN → DO → SHOW → PAUSE pattern
- Keep narration light during implementation
- Don't skip phases - goal is teaching workflow
- Pause for acknowledgment at key transitions
- Handle exits gracefully - never pressure
- Use real codebase tasks - no fake examples
- Adjust scope gently but respect user choice