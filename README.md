# Flashcards

This project is a vocabulary flashcards trainer focused on learning effectiveness and clean, extensible architecture.

While the initial version is intentionally simple, the codebase is structured to support future features such as persistence, spaced repetition algorithms, and multi-deck support.

## Current Features

- Interactive flashcard with front/back flipping
- Click-based interaction to trigger active recall
- Clear separation between domain logic, UI, and infrastructure

## Architecture Overview

The project follows a layered architecture inspired by Clean Architecture principles:

- **Domain**  
  Contains the core business logic and domain models (e.g. `Card`, `CardDeck`).  
  This layer is independent of UI and persistence details.

- **Infrastructure**  
  Handles external concerns such as data sources and mappings.  
  Repositories implement domain contracts and adapt external data formats into domain models.

- **UI**  
  Responsible for rendering and user interaction only.

- **Controller**  
  Orchestrates interactions between the UI and the domain.

## Project Status & Roadmap

This project is currently in an **early but stable stage**.

### Implemented

- Single-deck flashcard workflow  
  (cards are grouped in a single deck and navigated sequentially)

- Card domain model and deck navigation logic

- Interactive card flip using click-based state

- Active recall interaction

- Clean separation between domain, UI, and infrastructure layers

- Repository abstraction for data access (JSON-based source)


### Planned

- Multiple deck support  

- Deck organization by topics or categories  
  (e.g. verbs, travel, common phrases)

- Bidirectional practice modes  
  (English → Spanish / Spanish → English)

- Different exercise types  
  (e.g. recall, multiple choice, typing)

- Local persistence

- Spaced repetition scheduling

- Progress tracking per card and per deck

- Application-level UI with multiple views
