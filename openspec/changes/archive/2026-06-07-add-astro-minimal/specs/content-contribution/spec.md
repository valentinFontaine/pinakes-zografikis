## ADDED Requirements

### Requirement: Markdown content support
The project SHALL support adding content via Markdown files.

#### Scenario: Markdown files are processed
- **WHEN** a `.md` file is added to `src/pages/`
- **THEN** Astro SHALL process it as a page
- **AND** it SHALL be accessible via the corresponding route

#### Scenario: Frontmatter metadata is supported
- **WHEN** a Markdown file includes frontmatter
- **THEN** the metadata SHALL be accessible in the page template

### Requirement: Content directory structure
The project SHALL have a clear directory structure for content contribution.

#### Scenario: Content directory exists
- **WHEN** checking the project structure
- **THEN** a `src/content/` directory SHALL exist or be creatable

### Requirement: Contribution documentation
The project SHALL include documentation on how to add content.

#### Scenario: CONTRIBUTING.md exists
- **WHEN** checking the repository root
- **THEN** a `CONTRIBUTING.md` file SHALL exist
- **AND** it SHALL contain instructions for adding pages

#### Scenario: Documentation covers Markdown usage
- **WHEN** reading CONTRIBUTING.md
- **THEN** it SHALL explain how to create new Markdown pages
- **AND** it SHALL describe frontmatter usage
