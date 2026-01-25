import { Card } from '../../domain/index';

export class CardView {
    private cardElement: HTMLElement;
    private frontText: HTMLElement;
    private backText: HTMLElement;
    private isFlipped = false;

    constructor() {
        this.cardElement = this.getElement('.card');
        this.frontText = this.getElement('.front ul');
        this.backText = this.getElement('.back ul');
    }

    getElement(selector: string): HTMLElement {
        const el = document.querySelector(selector);
        if (!el) {
            throw new Error(`Element not found: ${selector}`);
        }
        return el as HTMLElement;
    }

    renderText(card: Card): void {
        this.frontText.textContent = card.getText();
        const meaningsList = card.getMeanings();
        this.backText.innerHTML = meaningsList
            .map((meaning) => `<li>${meaning}</li>`)
            .join('');
    }

    toggleClass(): void {
        this.isFlipped = !this.isFlipped;
        this.cardElement.classList.toggle('flipped', this.isFlipped);
    }

    isCardFlipped(): boolean {  
        return this.isFlipped;
    }
}
