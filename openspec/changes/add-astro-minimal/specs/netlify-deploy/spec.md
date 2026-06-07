## ADDED Requirements

### Requirement: Netlify deployment configuration
The project SHALL be deployable to Netlify with zero or minimal configuration.

#### Scenario: Netlify auto-detects Astro project
- **WHEN** connecting the repository to Netlify
- **THEN** Netlify SHALL auto-detect the Astro project
- **AND** deploy successfully without custom configuration

#### Scenario: Build command is standard
- **WHEN** Netlify builds the project
- **THEN** the build command SHALL be `npm run build`
- **AND** the publish directory SHALL be `dist/`

### Requirement: Deployment triggers on push
The site SHALL automatically redeploy when changes are pushed to the main branch.

#### Scenario: Push to main triggers deployment
- **WHEN** a commit is pushed to the main branch
- **THEN** Netlify SHALL automatically trigger a new deployment
- **AND** the updated site SHALL be available within 2 minutes

### Requirement: Deployed site is accessible
The deployed site SHALL be publicly accessible via the Netlify-generated URL.

#### Scenario: Site loads successfully
- **WHEN** navigating to the Netlify deployment URL
- **THEN** the page SHALL load without errors
- **AND** HTTP status code SHALL be 200
