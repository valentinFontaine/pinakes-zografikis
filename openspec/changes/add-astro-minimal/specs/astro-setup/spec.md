## ADDED Requirements

### Requirement: Astro project initialization
The root directory SHALL contain a minimal Astro project initialized using the official Astro CLI.

#### Scenario: Project structure exists
- **WHEN** the Astro project is created
- **THEN** the following directories SHALL exist:
  - `src/`
  - `src/pages/`
  - `public/`

#### Scenario: Astro configuration file exists
- **WHEN** the Astro project is created
- **THEN** an `astro.config.mjs` file SHALL exist in the root directory

### Requirement: Minimal dependencies
The project SHALL use the minimal Astro setup with no additional framework integrations.

#### Scenario: Only Astro dependencies are installed
- **WHEN** checking package.json dependencies
- **THEN** only `astro` SHALL be listed as a primary dependency

### Requirement: Basic project metadata
The Astro project SHALL have identifying metadata in package.json.

#### Scenario: Project name and description are set
- **WHEN** reading package.json
- **THEN** name SHALL be set to "pinakes-zografikis"
- **AND** description SHALL mention Astro
