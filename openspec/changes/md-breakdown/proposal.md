## Why

Allow non-technical people (gallery staff, artists) to edit website content and add new paintings to the gallery without touching HTML/JavaScript code. Extracting painting descriptions into separate markdown files makes the code more readable and easily modifiable by non-developers.

## What Changes

- Extract painting modal text content from HTML into individual `.md` files
- Update modal loading logic to read from markdown files instead of inline HTML
- Maintain existing modal UI/UX behavior
- **BREAKING**: Existing HTML structure for painting modals will be modified

## Capabilities

### New Capabilities
- `gallery-content`: Management of painting descriptions and metadata in markdown format
- `markdown-rendering`: Render markdown content in painting modals

### Modified Capabilities
- *(none - no existing OpenSpec capabilities are being modified at the requirement level)*

## Impact

- `galerie.html`: Modal content removed, references to markdown files added
- `js/script.js`: Add markdown loading and rendering logic
- New directory: `content/paintings/` containing `.md` files for each painting
- Existing painting modal functionality preserved
