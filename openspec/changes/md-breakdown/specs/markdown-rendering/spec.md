## ADDED Requirements

### Requirement: marked.js loaded from CDN
The system SHALL load the marked.js library from a CDN to render markdown content.

#### Scenario: CDN script included
- **WHEN** the gallery page loads
- **THEN** the marked.js library is loaded from `https://cdn.jsdelivr.net/npm/marked/marked.min.js`

#### Scenario: marked function available
- **WHEN** the page finishes loading
- **THEN** the global `marked` function is available for rendering markdown

### Requirement: Preload all markdown files at page load
The system SHALL fetch all painting markdown files when the gallery page loads.

#### Scenario: All files fetched
- **WHEN** the gallery page loads
- **THEN** all markdown files from `content/paintings/` are fetched

#### Scenario: Files fetched in parallel
- **WHEN** the gallery page loads
- **THEN** markdown files are fetched concurrently using `Promise.all`

### Requirement: Parse YAML frontmatter from markdown
The system SHALL extract YAML frontmatter metadata from each markdown file.

#### Scenario: Frontmatter parsed correctly
- **WHEN** a markdown file with frontmatter is loaded
- **THEN** the system extracts title, year, and technique as separate metadata fields

#### Scenario: Content separated from metadata
- **WHEN** a markdown file is parsed
- **THEN** the content after the closing `---` is available as the markdown body

### Requirement: Extract language sections from markdown
The system SHALL identify and separate English and Greek description sections from the markdown content.

#### Scenario: English section extracted
- **WHEN** a markdown file is parsed
- **THEN** the content under `# Description-en` is extracted as the English description

#### Scenario: Greek section extracted
- **WHEN** a markdown file is parsed
- **THEN** the content under `# Description-gr` is extracted as the Greek description

### Requirement: Render markdown to HTML
The system SHALL use marked.js to convert markdown content to HTML.

#### Scenario: Markdown rendered to HTML
- **WHEN** a painting modal is opened
- **THEN** the markdown description is converted to HTML using `marked.parse()`

#### Scenario: Language-specific rendering
- **WHEN** the user switches language and opens a modal
- **THEN** the system renders the description in the selected language (en or gr)

### Requirement: Display metadata in modal
The system SHALL display painting metadata (title, year, technique) in the modal alongside the rendered description.

#### Scenario: Title displayed
- **WHEN** a painting modal is opened
- **THEN** the painting title from frontmatter is displayed prominently in the modal

#### Scenario: Year and technique displayed
- **WHEN** a painting modal is opened
- **THEN** the year and technique from frontmatter are displayed in the modal

### Requirement: Graceful fallback if marked.js fails to load
The system SHALL display raw markdown text if marked.js fails to load.

#### Scenario: CDN failure fallback
- **WHEN** marked.js fails to load from CDN
- **THEN** the system displays unrendered markdown text in modals

#### Scenario: Error message in console
- **WHEN** marked.js fails to load
- **THEN** a warning is logged to the console
