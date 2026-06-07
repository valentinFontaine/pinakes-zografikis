## Context

The project currently has its legacy site code archived in the `old_version/` directory. The root directory is essentially empty and ready for a fresh start. We need a modern static site framework that enables easy deployment and collaborative content contribution.

**Current state**: Empty root directory, legacy code preserved in `old_version/`
**Constraints**: Must maintain `old_version/` as-is for reference
**Stakeholders**: Team members who will contribute content

## Goals / Non-Goals

**Goals:**
- Establish minimal Astro project in root directory
- Enable Netlify deployment with zero configuration
- Create clear structure for content contribution
- Keep initial setup as simple as possible
- Preserve ability to reference old site in `old_version/`

**Non-Goals:**
- Migrate existing content from old site
- Implement complex content management system
- Add advanced Astro features (i18n, SSR, etc.)
- Custom build configurations

## Decisions

### Astro as the Framework
**Decision**: Use Astro for the static site generator
**Rationale**: Astro provides fast builds, content-first approach, and excellent Markdown/MDX support out of the box. It's modern, well-documented, and has good Netlify integration. Alternatives considered: Next.js (overkill for static site), Hugo (less flexible), Gatsby (more complex).

### Minimal Initial Setup
**Decision**: Start with the most minimal Astro configuration (`npm create astro@latest -- --template minimal`)
**Rationale**: We want the simplest possible foundation. Contributors can add complexity as needed. This reduces initial setup time and cognitive load.

### Netlify Deployment
**Decision**: Use Netlify's auto-detect for deployment
**Rationale**: Astro has built-in Netlify adapter support. We can start with zero-config deployment and add `netlify.toml` only if custom configuration is needed later.

### Content Structure
**Decision**: Use Astro's default `src/pages/` and `src/content/` conventions
**Rationale**: Standard Astro conventions are well-documented and familiar to contributors. We'll use:
- `src/pages/` for route-based pages
- `src/content/` for Markdown-based content (blog posts, etc.)
- `public/` for static assets

## Risks / Trade-offs

**[Risk] New contributors need to learn Astro** → Mitigation: Create a CONTRIBUTING.md with basic Astro commands and patterns

**[Risk] Framework lock-in** → Mitigation: Astro is framework-agnostic; we can add React/Vue/etc. later if needed. The content is in Markdown which is portable.

**[Risk] Build time increases with content volume** → Mitigation: Astro's partial hydration and static generation keep builds fast. We'll monitor and optimize if this becomes an issue.

## Migration Plan

1. **Setup**: Create minimal Astro project in root
2. **Configuration**: Add basic project metadata (name, description)
3. **Deployment**: Push to repository, enable Netlify auto-deploy
4. **Verification**: Confirm site deploys successfully
5. **Documentation**: Add CONTRIBUTING.md with content contribution guidelines

**Rollback strategy**: If issues arise, we can revert the commit. The `old_version/` directory remains untouched as a fallback reference.

## Open Questions

- Should we add a simple homepage/starter page in the initial setup?
- Do we need any specific Astro integrations (e.g., Tailwind, MDX)?
- Should we set up a preview deployment branch for content contributors?
