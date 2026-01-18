export class Card {
    private readonly id: string;
    private readonly word: string;
    private readonly translation: string;

    constructor(id: string, word: string, translation: string) {
        this.id = id;
        this.word = word;
        this.translation = translation;
    }

    getId = (): string => {
        return this.id;
    };

    getWord = (): string => {
        return this.word;
    };
    
    getTranslation = (): string => {
        return this.translation;
    };
}