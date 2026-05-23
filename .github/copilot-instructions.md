# Git Commit Rules

Always use lowercase conventional commits.

Required format:

type(scope): message

Examples:
- feat(auth): add jwt refresh token flow
- fix(api): handle null response from service
- refactor(domain): extract card mapper
- docs(readme): improve installation section
- build(vite): configure alias resolution

Rules:
- Never use uppercase in commit messages
- Never omit the scope
- Keep messages concise
- Use imperative mood
- Do not end messages with periods
- Prefer semantic scopes:
  - ui
  - domain
  - infrastructure
  - architecture
  - api
  - database
  - tests
  - readme
  - build

Before committing:
1. Analyze changed files
2. Infer dominant concern
3. Generate a single conventional commit message
