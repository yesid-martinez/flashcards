export class FavoriteIcon {
    favoriteIconElement: HTMLButtonElement;

    constructor() {
        const icon = document.querySelector('#favoriteBtn');
        if (!icon) {
            throw new Error('Favorite icon element not found');
        }
        this.favoriteIconElement = icon as HTMLButtonElement;
    }

    updateFavoriteIcon(cardId: string, isFavorite: boolean): void {
        if (isFavorite) {
            this.favoriteIconElement.classList.add('isCardFavorite');
        } else {
            this.favoriteIconElement.classList.remove('isCardFavorite');
        }
    }
}