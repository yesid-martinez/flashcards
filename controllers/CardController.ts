import { CardDeck } from '../domain';
import { CardView } from '../ui/card/CardView';
import { CardAnimation } from '../ui/card/CardAnimation';
import type { ICardRepository } from '../domain/index';
import { CardRepository } from '../domain/index';

export class CardController {
    private deck!: CardDeck;
    private view: CardView;
    private animation!: CardAnimation;
    private repository: ICardRepository;

    constructor() {
        this.repository = new CardRepository();
        this.view = new CardView();
    }

    async init(): Promise<void> {
        const cards = await this.repository.getAll();
        this.deck = new CardDeck(cards);
        this.animation = new CardAnimation(this.view, this.deck);
        this.view.renderText(this.deck.current());
        this.animation.animate();
    }
}