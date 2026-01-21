import { Card } from '../../domain/index';
export interface ICardRepository {
  getAll(): Promise<Card[]>;
}