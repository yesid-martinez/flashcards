export class FavoriteIcon {
    favoriteIconElement: HTMLHeadingElement;

    constructor() {
        const icon = document.querySelector('h2');
        if (!icon) {
            throw new Error('Favorite icon element not found');
        }
        this.favoriteIconElement = icon as HTMLHeadingElement;
    }

    updateFavoriteIcon(cardId: string, isFavorite: boolean): void {
        if (isFavorite) {
            this.favoriteIconElement.classList.add('favorite');
        } else {
            this.favoriteIconElement.classList.remove('favorite');
        }
    }
}