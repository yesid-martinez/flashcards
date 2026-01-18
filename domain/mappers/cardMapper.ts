import { Card } from '../entities/Card';

export interface CardRaw {
    id: string;
    text: string;
    meanings: string[];
    notes: string[];
    examples: string[];
}

export function mapToCards(data: CardRaw[]): Card[] {
    return data.map(
        item => new Card(item.id, item.text, item.meanings, item.notes, item.examples)
    );
}