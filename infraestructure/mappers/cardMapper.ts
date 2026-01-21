import { Card } from '../../domain/index';

export interface CardRaw {
    id: string;
    text: string;
    meanings: string[];
    notes: string[];
    examples: string[];
}

export function jsonToCards(data: CardRaw[]): Card[] {
    return data.map(
        item => new Card(item.id, item.text, item.meanings, item.notes, item.examples)
    );
}