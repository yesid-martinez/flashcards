import { CardView } from "./CardView";
import { CardDeck } from "../../domain/index";

export class CardAnimation {
    private cardElement: HTMLElement;
    private buttonElement: HTMLElement;

    constructor (private view: CardView, private deck: CardDeck) { 
        const cardElement = this.view.getElement('.card');
        this.cardElement = cardElement;

        this.buttonElement = this.view.getElement('#nextBtn');

    }

    handleDelay(onCompleted: () => void): void {
        if (!this.view.isCardFlipped()) {
            onCompleted();
            return;
        }

        const onTransitionEnd = (event: Event) => {
            if (
                event instanceof TransitionEvent &&
                event.propertyName === 'transform'
            ) {
                this.cardElement.removeEventListener('transitionend', onTransitionEnd);
                onCompleted();
            }
        };

        this.cardElement.addEventListener('transitionend', onTransitionEnd);

        this.view.toggleClass();
    }

    animate(): void {
        this.onCardClick(() => {
            this.view.toggleClass();
        });

        this.onNextClick(() => {
            this.handleDelay(() => {
                const currentCard = this.deck.next();
                this.view.renderText(this.deck.current());
            }); 
        });
    }

    onCardClick(handler: () => void): void {
        this.cardElement.addEventListener('click', handler);
    }

    onNextClick(handler: () => void): void {
        this.buttonElement.addEventListener('click', handler);
    }
}
