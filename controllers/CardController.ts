import { CardDeck } from '../domain';
import { CardView } from '../ui/card/CardView';
import { CardAnimation } from '../ui/card/CardAnimation';
import { CardRepository } from '../domain/index';

export class CardController {
    private deck!: CardDeck;
    private view: CardView;
    private animation!: CardAnimation;
    private repository: CardRepository;

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