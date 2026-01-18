import { Card } from '../domain/index';

export class CardView {
    private cardElement: HTMLElement;
    private frontText: HTMLElement;
    private backText: HTMLElement;
    private btn: HTMLElement;
    private isFlipped = false;

    constructor() {
        this.cardElement = this.getElement('.card');
        this.frontText = this.getElement('.front p');
        this.backText = this.getElement('.back p');
        this.btn = this.getElement('#nextBtn');
    }

    private getElement(selector: string): HTMLElement {
        const el = document.querySelector(selector);
        if (!el) {
            throw new Error(`Element not found: ${selector}`);
        }
        return el as HTMLElement;
    }

    renderText(card: Card): void {
        this.frontText.textContent = card.getWord();
        this.backText.textContent = card.getTranslation();
    }

    flip(): void {
        this.isFlipped = !this.isFlipped;
        this.cardElement.classList.toggle('flipped', this.isFlipped);
    }

    isCardFlipped(): boolean {  
        return this.isFlipped;
    }

    handleDelay(onCompleted: () => void): void {
        if (!this.isFlipped) {
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

        this.isFlipped = false;
        this.cardElement.classList.remove('flipped');
    }

    onCardClick(handler: () => void): void {
        this.cardElement.addEventListener('click', handler);
    }

    onNextClick(handler: () => void): void {
        this.btn.addEventListener('click', handler);
    }
}
