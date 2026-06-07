# Painting Content Management

This directory contains markdown files for all paintings displayed in the gallery. Each painting has its own `.md` file with metadata and bilingual descriptions.

## File Structure

```
content/paintings/
├── TEMPLATE.md          # Template for new paintings
├── README.md            # This file
├── DEL_1694.md         # Painting files
├── DEL_1695.md
└── ...
```

## File Format

Each painting file uses the following format:

```markdown
---
title: "Painting Title"
year: 2024
technique: "Oil on canvas"
---

# Description-en

English description of the painting.

Supports markdown formatting:
- *Italics* and **bold**
- Lists
- Links
- Any standard markdown syntax

# Description-gr

Περιγραφή του πίνακα στα ελληνικά.

Υποστηρίζει μορφοποίηση markdown:
- *Πλάγια* και **έντονα**
- Λίστες
- Συνδέσμους
```

## Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| title | string | Painting title | `"Light in a Vase"` |
| year | number | Creation year | `2024` |
| technique | string | Art technique | `"Oil on canvas / Spatule"` |

## File Naming

- Use the painting ID as the filename: `DEL_XXXX.md`
- IDs are numeric, e.g., `DEL_1694.md`
- Do not use spaces or special characters

## Adding a New Painting

1. Copy `TEMPLATE.md` to a new file named `DEL_XXXX.md` (replace XXXX with the painting ID)
2. Update the YAML frontmatter with the painting's metadata
3. Add English description under `# Description-en`
4. Add Greek description under `# Description-gr`
5. Add the painting image to `images/DEL_XXXX.JPG`
6. Add the thumbnail to `images/thumbnails/thumb_DEL_XXXX.JPG`
7. Update `galerie.html` to include the new painting (see main README)

## Editing Content

To edit a painting's information:
1. Open the corresponding `.md` file in this directory
2. Modify the YAML frontmatter for metadata (title, year, technique)
3. Update the description sections as needed
4. Save the file - changes will be reflected on the next page load

**Note:** The website preloads all painting markdown files when the gallery page loads. No server restart or build process is required.

## Language Sections

- Use `# Description-en` for English content
- Use `# Description-gr` for Greek content
- Both sections are required for each painting
- Content after these headers will be rendered as markdown

## Example

See `DEL_1694.md` for a complete example, or use `TEMPLATE.md` as a starting point.

## Troubleshooting

**Markdown not rendering?**
- Check that the file has valid YAML frontmatter (delimited by `---`)
- Ensure both description sections exist
- Verify the file is in the correct location

**Changes not appearing?**
- Clear your browser cache
- Check the browser console for errors
- Ensure the painting ID in the filename matches the modal ID

**Greek characters not displaying?**
- The site uses UTF-8 encoding
- Ensure your text editor saves files as UTF-8
- marked.js handles special characters automatically
