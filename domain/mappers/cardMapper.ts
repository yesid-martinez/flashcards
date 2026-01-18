import { Card } from '../entities/Card';

export interface CardRaw {
    id: string;
    word: string;
    translation: string;
}

export function mapToCards(data: CardRaw[]): Card[] {
    return data.map(
        item => new Card(item.id, item.word, item.translation)
    );
}