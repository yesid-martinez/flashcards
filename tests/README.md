# Tests

## Overview

This directory contains TypeScript tests using **Vitest**. Suites focus on domain logic, controller orchestration, and repository behavior aligned with the app layers.

## Test architecture

Domain tests validate pure business rules. Controller tests verify orchestration between domain data, UI collaborators, and animations using mocks. Repository tests cover persistence layer contracts and mappings.

## Folder structure

- `controllers/` controller-layer tests (e.g., `CardController.test.ts`) covering initialization, favorite toggling, and card navigation updates.
- `domain/` domain-layer behavior tests (e.g., `CardDeck.test.ts`).
- `repositories/` repository implementation tests in the infrastructure layer (e.g., `FavoriteRepository.test.ts`).

## Test categories

**Unit tests** cover domain objects and logic that do not touch UI or persistence.

**Controller tests** validate controller flows such as rendering the first card, toggling favorites, and updating the favorite icon when moving to the next card.

**Repository tests** ensure persistence APIs behave consistently and map data correctly.

## Execution commands

```bash
npm test
```

## Important testing conventions

- Test files use the `*.test.ts` suffix and mirror the module they verify.
- Tests import helpers from `vitest` (`describe`, `it`, `expect`, etc.).
- Controller tests mock UI adapters (like `CardView` and `CardAnimation`) and repositories to keep assertions focused on controller behavior.