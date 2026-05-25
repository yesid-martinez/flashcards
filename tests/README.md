# Tests

This directory contains unit tests written in TypeScript using **Vitest**.

## Structure

- `domain/` tests for domain-layer behavior (e.g., `CardDeck.test.ts`).
- `repositories/` tests for repository implementations in the infrastructure layer (e.g., `FavoriteRepository.test.ts`).

## Conventions

- Test files use the `*.test.ts` suffix and mirror the module they verify.
- Tests import helpers from `vitest` (`describe`, `it`, `expect`, etc.).
