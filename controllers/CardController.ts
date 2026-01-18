import data from '../data/data.json' assert { type: 'json' };
import { CardDeck } from '../domain';
import { mapToCards } from '../domain/mappers/cardMapper';
import { CardView } from '../ui/CardView';

export class CardController {
    private deck: CardDeck;
    private view: CardView;

    constructor() {
        const cards = mapToCards(data);
        this.deck = new CardDeck(cards);
        this.view = new CardView();
    }

    init(): void {
        this.view.renderText(this.deck.current());

        this.view.onCardClick(() => {
            this.view.flip();
        });

        this.view.onNextClick(() => {
            this.view.handleDelay(() => {
                this.deck.next();
                this.view.renderText(this.deck.current());
            });
        });
    }
}