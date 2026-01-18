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

    resetFlip(): void {
        this.isFlipped = false;
        this.cardElement.classList.remove('flipped');
    }

    isCardFlipped(): boolean {  
        return this.isFlipped;
    }

    onCardClick(handler: () => void): void {
        this.cardElement.addEventListener('click', handler);
    }

    onNextClick(handler: () => void): void {
        this.btn.addEventListener('click', handler);
    }
}
