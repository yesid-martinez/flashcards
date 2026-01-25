import { Card } from '../entities/Card';
export interface ICardRepository {
  getAll(): Promise<Card[]>;
}