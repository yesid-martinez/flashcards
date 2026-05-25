---
applyTo: "tests/**/*"
---

# Test Documentation Rules

This repository uses the `/tests` directory as the main testing entrypoint.

When working inside the tests directory:

- NEVER generate new tests unless explicitly requested
- NEVER modify assertions unless explicitly requested
- Focus on maintaining and improving test documentation only

# README Documentation Responsibilities

When tests are added, modified, refactored, or reorganized:

- Update `/tests/README.md`
- Keep the README synchronized with the current test structure
- Document the purpose of each test suite
- Explain what behavior is being validated
- Describe the architectural layer being tested

# Documentation Style

Use concise technical documentation.

Prefer:
- clear headings
- folder structure explanations
- testing strategy descriptions
- architectural reasoning
- short summaries per suite

Avoid:
- excessive prose
- generic explanations
- repeating test code
- documenting every single assertion

# README Structure

The `/tests/README.md` should contain:

1. Overview
2. Test architecture
3. Folder structure
4. Test categories
5. Execution commands
6. Important testing conventions

# Test Categories

Document distinctions such as:
- unit tests
- integration tests
- repository tests
- controller tests
- domain tests

# Behavioral Rules

Before updating the README:
1. Analyze current test folders
2. Infer testing architecture
3. Summarize responsibilities of each suite
4. Keep documentation aligned with current project architecture

# Writing Style

- Use markdown
- Use lowercase headings when appropriate
- Keep explanations technical and concise
- Prefer architecture-oriented documentation
- Explain WHY the test suite exists, not line-by-line implementation details

# Example Sections

## unit tests
Tests isolated business logic and domain behavior.

## integration tests
Validates interaction between repositories, services, and infrastructure components.

## repository tests
Ensures persistence layer contracts and mappings behave correctly.
