export class Favorite {
  cardId: string;
  constructor(cardId: string) {
    this.cardId = cardId;
  }

  getCardId(): string {
    return this.cardId;
  }
}