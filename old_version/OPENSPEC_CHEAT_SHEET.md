# OpenSpec Cheat Sheet

## Quick Start

```bash
# Create a new change
openspec new change <change-name>

# Navigate to change directory
cd openspec/changes/<change-name>/

# Check status of change
openspec status --change <change-name>

# Get instructions for next artifact
openspec instructions <artifact> --change <change-name>
```

## Artifact Workflow

### 1. Proposal (`proposal.md`)
**Purpose:** Why this change is needed

**Sections:**
- Why - Problem/opportunity + why now
- What Changes - Bullet list of changes (mark BREAKING)
- Capabilities - New/Modified capabilities
- Impact - Affected code, APIs, dependencies

**Command:**
```bash
openspec instructions proposal --change <name>
```

### 2. Design (`design.md`)
**Purpose:** How to implement the change

**Sections:**
- Context - Background, current state, constraints
- Goals / Non-Goals
- Decisions - Key choices with rationale
- Risks / Trade-offs
- Migration Plan + Rollback strategy
- Open Questions

**Command:**
```bash
openspec instructions design --change <name>
```

### 3. Specs (`specs/<capability>/spec.md`)
**Purpose:** What the system must do (testable requirements)

**For NEW capabilities:**
```markdown
## ADDED Requirements

### Requirement: <name>
<description>

#### Scenario: <name>
- **WHEN** <condition>
- **THEN** <expected outcome>
```

**For MODIFIED capabilities:**
```markdown
## MODIFIED Requirements

### Requirement: <original-name>
<full updated content including all scenarios>
```

**Important:** Use exactly 3 `#` for Requirements, 4 `#` for Scenarios

**Command:**
```bash
openspec instructions specs --change <name>
```

### 4. Tasks (`tasks.md`)
**Purpose:** Implementation checklist

**Format:**
```markdown
## 1. Task Group

- [ ] 1.1 Task description
- [ ] 1.2 Task description

## 2. Task Group

- [ ] 2.1 Task description
```

**Command:**
```bash
openspec instructions tasks --change <name>
```

## Validation & Completion

```bash
# Validate all artifacts
openspec verify --change <name>

# Check status
openspec status --change <name>

# Archive completed change
openspec archive --change <name>
```

## Project Structure

```
openspec/
├── specs/
│   └── <capability>/
│       └── spec.md      # Project capability specs
└── changes/
    ├── <change-name>/
    │   ├── .openspec.yaml
    │   ├── proposal.md
    │   ├── design.md
    │   ├── specs/
    │   │   └── <capability>/
    │   │       └── spec.md
    │   └── tasks.md
    └── archive/
        └── YYYY-MM-DD-<name>/
            └── (archived artifacts)
```

## Tips

- **Naming:** Use kebab-case for changes and capabilities
- **Dependencies:** design and specs depend on proposal; tasks depend on design and specs
- **Scenarios:** Each requirement MUST have at least one scenario
- **Headers:** Use SHALL/MUST for normative requirements
- **Blocking:** If a task blocks another, note it in the description
