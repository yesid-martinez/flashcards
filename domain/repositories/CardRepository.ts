import { Card } from '../entities/Card';
import type { ICardRepository } from '../index';

import { cardMapper } from '../mappers/cardMapper';
import cardsData from '../../data/data.json' assert { type: 'json' };

export class CardRepository implements ICardRepository {
  private data: Card[];

  constructor() {
    this.data = cardMapper(cardsData);
  }
  
  async getAll(): Promise<Card[]> {
    return this.data;
  }
}