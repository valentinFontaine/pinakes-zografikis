## ADDED Requirements

### Requirement: Painting content stored in markdown files
The system SHALL store each painting's content in a separate markdown file at `content/paintings/<painting-id>.md`.

#### Scenario: Painting file exists
- **WHEN** a painting with ID DEL_1694 is added to the gallery
- **THEN** a file `content/paintings/DEL_1694.md` exists with the painting's content

#### Scenario: All paintings have markdown files
- **WHEN** the gallery page loads
- **THEN** markdown files exist for all 17 paintings (DEL_1694 through DEL_1712)

### Requirement: YAML frontmatter for painting metadata
The system SHALL use YAML frontmatter in each markdown file to store painting metadata with at least title, year, and technique fields.

#### Scenario: Valid frontmatter present
- **WHEN** a painting markdown file is parsed
- **THEN** it contains YAML frontmatter delimited by `---` with title, year, and technique fields

#### Scenario: Frontmatter format
- **WHEN** a markdown file is created
- **THEN** the frontmatter follows YAML syntax:
  ```yaml
  title: "Painting Name"
  year: 2024
  technique: "Oil on canvas"
  ```

### Requirement: Bilingual content sections
The system SHALL support bilingual content with separate sections for English and Greek descriptions.

#### Scenario: English description section exists
- **WHEN** a painting markdown file is parsed
- **THEN** it contains a `# Description-en` section with English content

#### Scenario: Greek description section exists
- **WHEN** a painting markdown file is parsed
- **THEN** it contains a `# Description-gr` section with Greek content

### Requirement: Content directory structure
The system SHALL organize painting markdown files in a `content/paintings/` directory.

#### Scenario: Directory exists
- **WHEN** the application starts
- **THEN** a `content/paintings/` directory exists containing all painting markdown files

#### Scenario: File naming convention
- **WHEN** a new painting is added
- **THEN** its markdown file follows the naming pattern `<PAINTING-ID>.md`
