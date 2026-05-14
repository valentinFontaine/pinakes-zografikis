## Purpose

Provide a standardized change management workflow using OpenSpec artifacts (proposal, design, specs, tasks) to ensure consistent, traceable, and reviewable changes to the project.

## Requirements

### Requirement: OpenSpec workflow initialization
The system SHALL provide a standardized change management workflow using OpenSpec artifacts (proposal, design, specs, tasks).

#### Scenario: New change creation
- **WHEN** a developer starts a new change
- **THEN** the system provides a directory structure for proposal.md, design.md, specs/, and tasks.md

#### Scenario: Artifact validation
- **WHEN** a change artifact is created
- **THEN** the system validates it against the spec-driven schema

#### Scenario: Status tracking
- **WHEN** artifacts are created or modified
- **THEN** the system tracks which artifacts are done, ready, or blocked

### Requirement: Change artifact dependencies
The system SHALL enforce artifact dependencies where design and specs are blocked by proposal, and tasks are blocked by design and specs.

#### Scenario: Blocked artifact creation
- **WHEN** a user attempts to create a blocked artifact
- **THEN** the system prevents creation until dependencies are complete

#### Scenario: Unblocking dependencies
- **WHEN** all dependencies of a blocked artifact are complete
- **THEN** the artifact status changes from blocked to ready

### Requirement: Change directory structure
The system SHALL create a consistent directory structure at `openspec/changes/<change-name>/` for each change.

#### Scenario: Directory creation
- **WHEN** a new change is initialized
- **THEN** the system creates the change directory with proper naming (kebab-case)

#### Scenario: Artifact file paths
- **WHEN** artifacts are created
- **THEN** they are saved at the correct paths within the change directory
