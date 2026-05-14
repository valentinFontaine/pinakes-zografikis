## 1. Setup Infrastructure

- [x] 1.1 Create `content/paintings/` directory
- [x] 1.2 Add marked.js CDN script tag to `galerie.html` head section
- [x] 1.3 Create template markdown file at `content/paintings/TEMPLATE.md` with example frontmatter and sections

## 2. Extract Existing Content

- [x] 2.1 Extract painting DEL_1694 content from `galerie.html` and create `content/paintings/DEL_1694.md`
- [x] 2.2 Extract painting DEL_1695 content and create `content/paintings/DEL_1695.md`
- [x] 2.3 Extract painting DEL_1696 content and create `content/paintings/DEL_1696.md`
- [x] 2.4 Extract painting DEL_1697 content and create `content/paintings/DEL_1697.md`
- [x] 2.5 Extract painting DEL_1698 content and create `content/paintings/DEL_1698.md`
- [x] 2.6 Extract painting DEL_1699 content and create `content/paintings/DEL_1699.md`
- [x] 2.7 Extract painting DEL_1700 content and create `content/paintings/DEL_1700.md`
- [x] 2.8 Extract painting DEL_1701 content and create `content/paintings/DEL_1701.md`
- [x] 2.9 Extract painting DEL_1702 content and create `content/paintings/DEL_1702.md`
- [x] 2.10 Extract painting DEL_1703 content and create `content/paintings/DEL_1703.md`
- [x] 2.11 Extract painting DEL_1704 content and create `content/paintings/DEL_1704.md`
- [x] 2.12 Extract painting DEL_1705 content and create `content/paintings/DEL_1705.md`
- [x] 2.13 Extract painting DEL_1706 content and create `content/paintings/DEL_1706.md`
- [x] 2.14 Extract painting DEL_1707 content and create `content/paintings/DEL_1707.md`
- [x] 2.15 Extract painting DEL_1708 content and create `content/paintings/DEL_1708.md`
- [x] 2.16 Extract painting DEL_1709 content and create `content/paintings/DEL_1709.md`
- [x] 2.17 Extract painting DEL_1710 content and create `content/paintings/DEL_1710.md`
- [x] 2.18 Extract painting DEL_1711 content and create `content/paintings/DEL_1711.md`
- [x] 2.19 Extract painting DEL_1712 content and create `content/paintings/DEL_1712.md`

## 3. JavaScript Implementation

- [x] 3.1 Add function to parse YAML frontmatter from markdown string
- [x] 3.2 Add function to extract Description-en and Description-gr sections from markdown
- [x] 3.3 Create painting data store object to hold all loaded markdown content
- [x] 3.4 Implement `loadAllPaintings()` function to fetch all markdown files in parallel
- [x] 3.5 Implement `renderPaintingModal(paintingId, language)` function to render modal content
- [x] 3.6 Update modal open handler to use new rendering logic
- [x] 3.7 Integrate with existing language selector to switch between en/gr descriptions
- [x] 3.8 Add error handling for failed markdown file loads
- [x] 3.9 Add fallback to display raw text if marked.js fails to load

## 4. HTML Updates

- [x] 4.1 Remove inline painting descriptions from modal elements in `galerie.html`
- [x] 4.2 Add data attributes to painting elements for mapping to markdown files (e.g., `data-painting-id="DEL_1694"`)
- [x] 4.3 Update modal structure to display metadata (title, year, technique) separately from description

## 5. Testing

- [ ] 5.1 Test that all 17 painting modals open correctly
- [ ] 5.2 Test language switching between English and Greek
- [ ] 5.3 Test that metadata (title, year, technique) displays correctly
- [ ] 5.4 Test marked.js rendering (bold, italics, links work correctly)
- [ ] 5.5 Test Greek character rendering
- [ ] 5.6 Test on Chrome, Firefox, Safari, Edge
- [ ] 5.7 Test fallback behavior if marked.js CDN fails
- [ ] 5.8 Test with console open for any errors

## 6. Documentation

- [x] 6.1 Create `content/paintings/README.md` explaining the markdown format
- [x] 6.2 Document how to add a new painting
- [x] 6.3 Create guide for non-technical users on editing content
