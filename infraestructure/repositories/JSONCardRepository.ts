import data from '../../data/data.json' assert { type: 'json' };
import { Card } from '../../domain/index';
import { jsonToCards } from '../mappers/cardMapper';
import type { ICardRepository } from '../interfaces/ICardRepository';

export class JSONCardRepository implements ICardRepository {
  async getAll(): Promise<Card[]> {
    return jsonToCards(data);
  }
}