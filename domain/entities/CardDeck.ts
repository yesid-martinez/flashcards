import { Card } from './Card';

export class CardDeck {
    private index = 0;

    constructor(private readonly cards: Card[]) {}

    current(): Card {
        const card = this.cards[this.index];
        if (!card) {
            throw new Error('Invalid card index');
        }
        return card;
    }

    next(): Card {
        this.index = (this.index + 1) % this.cards.length;
        return this.current();
    }
}