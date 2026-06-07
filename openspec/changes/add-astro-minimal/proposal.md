## Why

With the old site code archived in `old_version/`, we need a fresh foundation for the new site. This change establishes a minimal Astro setup to enable web deployment via Netlify and allow collaborative content contribution.

## What Changes

- Add minimal Astro project structure to the root directory
- Configure Netlify deployment pipeline
- Set up basic project configuration for content contribution
- **BREAKING**: The root directory will contain a new Astro project (old code is preserved in `old_version/`)

## Capabilities

### New Capabilities
- `astro-setup`: Minimal Astro project configuration and structure
- `netlify-deploy`: Netlify deployment configuration and pipeline
- `content-contribution`: Framework and conventions for adding content

### Modified Capabilities

## Impact

- Root directory structure changes (new Astro project files)
- New deployment configuration files (netlify.toml, etc.)
- `old_version/` directory remains unchanged as reference
- Existing project documentation may need updates
