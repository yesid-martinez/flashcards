# Flashcards Vocabulary Trainer

## Overview

This project started as a simple idea to help users learn and reinforce English vocabulary using **flashcards**. The core concept is to allow users to add words or phrases and review them easily.

The application aims to replicate the traditional physical flashcard method, while making it more practical, flexible, and organized in a single digital place.

In addition, the project is designed with proven learning techniques in mind:

* **Active Recall**: encouraging the user to try to remember the meaning before revealing the answer.
* **Spaced Repetition**: revisiting certain cards after a period of time to reduce forgetting and strengthen long‑term memory.

## Goals

With this application, a user should be able to:

* Create custom flashcards with words or phrases.
* Organize cards by categories or topics (verbs, places, objects, common phrases, etc.).
* Practice in both directions: **English → Spanish** and **Spanish → English**.
* Repeat cards they fail and progressively advance with the ones they already remember.
* Add examples, notes, or descriptions to each card for additional context.

## Current Scope (Initial Version)

The current implementation focuses on the **core interaction**: a single flashcard that can be flipped by the user.

This version serves as the foundation for future features such as multiple cards, scoring, spaced repetition logic, and persistence.

### Basic Structure

The HTML structure represents a flashcard with two sides:

* **Front**: the prompt (e.g., the English word).
* **Back**: the answer (e.g., the Spanish translation).

### Basic Behavior

A click event toggles the card state, visually flipping it between front and back

This interaction models the **active recall** process: the user sees the front, attempts to recall the meaning, and then clicks to reveal the back.
