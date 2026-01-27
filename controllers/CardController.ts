import { CardDeck } from '../domain';
import { CardView } from '../ui/card/CardView';
import { CardAnimation } from '../ui/card/CardAnimation';
import { CardRepository } from '../domain/index';
import type { FavoriteController } from './FavoriteController';

export class CardController {
    private deck!: CardDeck;
    private view: CardView;
    private animation!: CardAnimation;
    private repository: CardRepository;
    private favController: FavoriteController;

    constructor(favoriteController: FavoriteController) {
        this.repository = new CardRepository();
        this.view = new CardView();
        this.favController = favoriteController;
    }

    async init(): Promise<void> {
        const cards = await this.repository.getAll();
        this.deck = new CardDeck(cards);
        this.animation = new CardAnimation(this.view, this.deck);
        this.view.renderText(this.deck.current());
        this.animation.animate();
    
        // Initialize favorite icon state
        const isFavorite = this.favController.repository.isFavorite(this.deck.current().getId());
        this.favController.favoriteIcon.updateFavoriteIcon(this.deck.current().getId(), isFavorite);

        // Update favorite state
        this.animation.onNextClick(() => {
            this.updateFavoriteState();
        });

        // Favorite button handler
        this.view.getFavoriteButton().addEventListener('click', () => {
            this.toggleFavorite();
        });
    }

    private updateFavoriteState(cardId = this.deck.current().getId()): void {
        const isFavorite = this.favController.repository.isFavorite(cardId);
        this.favController.favoriteIcon.updateFavoriteIcon(cardId, isFavorite);
    }

    private async toggleFavorite(): Promise<void> {
        const cardId = this.deck.current().getId();
        const repo = this.favController.repository;

        if (repo.isFavorite(cardId)) {
            await repo.remove(cardId);
        } else {
            await repo.add(cardId);
        }

        this.updateFavoriteState(cardId);
    }
}