## Context

The current website has painting descriptions hardcoded in HTML within modal elements in `galerie.html`. This makes it difficult for non-technical users (gallery staff, artists) to add or edit painting information. The site supports both Greek and English languages via a language selector.

Current structure:
- `galerie.html` contains modal elements with inline HTML for each painting
- `js/script.js` handles modal display logic
- 17 paintings: DEL_1694 through DEL_1712

## Goals / Non-Goals

**Goals:**
- Extract painting content into separate markdown files
- Enable non-technical users to edit content by modifying markdown files
- Maintain existing modal UI/UX behavior
- Support bilingual content (English and Greek)
- Preload all content at page load for performance

**Non-Goals:**
- Modify the visual design of modals
- Change the language switching mechanism
- Add a CMS or admin interface
- Optimize for very large numbers of paintings (>100)

## Decisions

**Decision: YAML frontmatter for metadata**
- Rationale: Standard format, easy to parse, human-readable. Keeps metadata separate from content.
- Format:
  ```markdown
  ---
  title: "Painting Name"
  year: 2024
  technique: "Oil on canvas"
  ---
  ```

**Decision: One markdown file per painting**
- Rationale: Easy to manage, each painting is self-contained, can be added/removed independently.
- Location: `content/paintings/DEL_1694.md` through `content/paintings/DEL_1712.md`

**Decision: H1 headers for language sections**
- Rationale: Consistent with markdown conventions, easy to parse.
- Format:
  ```markdown
  # Description-en
  English description...
  
  # Description-gr
  Greek description...
  ```

**Decision: marked.js from CDN**
- Rationale: No local dependency management, always up-to-date, no build step required.
- URL: `https://cdn.jsdelivr.net/npm/marked/marked.min.js`
- No configuration initially (may add sanitization later)

**Decision: Preload all markdown at page load**
- Rationale: 17 paintings is manageable, avoids loading delays when modals open, simpler implementation.
- All files fetched via `fetch()` in parallel at page load.

**Decision: File naming convention**
- Rationale: Matches existing painting IDs in HTML, easy migration mapping.
- Pattern: `DEL_XXXX.md` where XXXX ranges from 1694 to 1712

## Risks / Trade-offs

**[Risk] Markdown file format errors** → Mitigation: Validate files on load, provide clear error messages in console. Create a template file for new paintings.

**[Risk] Preloading performance with many paintings** → Mitigation: 17 files is minimal. If scaling beyond 50, reconsider lazy loading. Current approach is simplest for stated requirements.

**[Risk] CDN dependency for marked.js** → Mitigation: marked.js is stable and widely used. Fallback to simple text display if CDN fails.

**[Risk] Special characters in markdown breaking rendering** → Mitigation: marked.js handles escaping. Test with Greek characters during implementation.

## Migration Plan

1. **Phase 1: Setup** (1 day)
   - Create `content/paintings/` directory
   - Add marked.js CDN script tag to `index.html` or `galerie.html`
   - Create template markdown file

2. **Phase 2: Extract Content** (2-3 days)
   - Extract existing painting data from `galerie.html`
   - Create 17 markdown files with YAML frontmatter
   - Organize English and Greek descriptions into separate sections

3. **Phase 3: Update Modal Logic** (2-3 days)
   - Modify `js/script.js` to fetch and parse markdown files
   - Update modal display to render markdown via marked.js
   - Map painting IDs to markdown filenames

4. **Phase 4: Testing** (1-2 days)
   - Test all 17 paintings display correctly
   - Test language switching
   - Test on different browsers

5. **Phase 5: Documentation** (1 day)
   - Document markdown file format
   - Create guide for non-technical users

**Rollback strategy**: Keep original `galerie.html` backup. If issues arise, revert to original HTML-based modals.

## Open Questions

- Should we add a script to validate all markdown files have required metadata?
- Should the year field be numeric only or allow ranges (e.g., "2020-2021")?
- Should technique field have controlled vocabulary or be free text?
