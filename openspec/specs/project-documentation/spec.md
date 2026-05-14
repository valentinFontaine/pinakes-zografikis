## Purpose

Define the format and conventions for documenting project capabilities as OpenSpec specifications, ensuring all requirements are clear, testable, and discoverable.

## Requirements

### Requirement: Capability specification format
The system SHALL document each project capability as a spec file at `openspec/specs/<capability>/spec.md` using OpenSpec conventions.

#### Scenario: New capability documentation
- **WHEN** a new capability is added to the project
- **THEN** a corresponding spec file is created with ADDED Requirements section

#### Scenario: Existing capability modification
- **WHEN** an existing capability's requirements change
- **THEN** a delta spec is created with MODIFIED Requirements section

### Requirement: Requirement formatting
The system SHALL format requirements using `### Requirement: <name>` headers followed by descriptive text.

#### Scenario: Valid requirement structure
- **WHEN** a spec file is created
- **THEN** each requirement uses exactly three hashtags for the header

#### Scenario: Scenario formatting
- **WHEN** scenarios are added to a requirement
- **THEN** each scenario uses exactly four hashtags for the header

### Requirement: Scenario structure
The system SHALL structure scenarios using WHEN/THEN format with bullet points.

#### Scenario: Proper scenario format
- **WHEN** a scenario is documented
- **THEN** it contains **WHEN** and **THEN** entries as bullet points

#### Scenario: Testable scenarios
- **WHEN** a scenario describes behavior
- **THEN** it is written in a way that could be automated as a test case

### Requirement: Spec discoverability
The system SHALL make all capability specs discoverable through the `openspec/specs/` directory structure.

#### Scenario: Listing capabilities
- **WHEN** a user explores the specs directory
- **THEN** they can see all documented capabilities as subdirectories

#### Scenario: Reading capability specs
- **WHEN** a user opens a capability spec file
- **THEN** they see all requirements and scenarios for that capability
