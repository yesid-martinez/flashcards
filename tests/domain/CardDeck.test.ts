import { describe, expect, it } from 'vitest';

import { CardDeck } from '../../domain';
import { Card } from '../../domain/entities/Card';

describe('CardDeck', () => {
  const cards = [
    new Card('1', 'hello', 'hola', [], ''),
    new Card('2', 'world', 'mundo', [], '')
  ];

  it('should return the first card initially', () => {
    const deck = new CardDeck(cards);

    expect(deck.current().getId()).toBe('1');
  });

  it('should move to the next card', () => {
    const deck = new CardDeck(cards);

    deck.next();

    expect(deck.current().getId()).toBe('2');
  });

  it('should cycle back to first card', () => {
    const deck = new CardDeck(cards);

    deck.next();
    deck.next();

    expect(deck.current().getId()).toBe('1');
  });
});