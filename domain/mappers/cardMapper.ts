import { Card } from '../entities/Card';

interface CardSchema {
    id: string;
    text: string;
    meanings: string[];
    notes: string[];
    examples: string[];
}

export function cardMapper(data: CardSchema[]): Card[] {
    return data.map(
        item => new Card(item.id, item.text, item.meanings, item.notes, item.examples)
    );
}