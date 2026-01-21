import { CardDeck } from '../domain';
import { CardView } from '../ui/CardView';
import type { ICardRepository } from '../infraestructure/interfaces/ICardRepository';

export class CardController {
    private deck!: CardDeck;
    private view: CardView;
    private repository: ICardRepository;

    constructor(repository: ICardRepository) {
        this.repository = repository;
        this.view = new CardView();
    }

    async init(): Promise<void> {
        const cards = await this.repository.getAll();
        this.deck = new CardDeck(cards);
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