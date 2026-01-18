import data from '../data/data.json' assert { type: 'json' };
import { CardDeck } from '../domain';
import { mapToCards } from '../domain/mappers/cardMapper';

export class CardController {
    init(): void {
        try {
            const cards = mapToCards(data);
            const deck = new CardDeck(cards);

            console.log("Card deck initialized:", deck);
        } catch (error) {
            console.error('Failed to map data to cards:', error);
            return;
        }
    }
}