export class Card {
    private readonly id: string;
    private readonly text: string;
    private readonly meanings: string[];
    private readonly notes: string[];
    private readonly examples: string[];

    constructor(id: string, text: string, meanings: string[], notes: string[], examples: string[]) {
        this.id = id;
        this.text = text;
        this.meanings = meanings;
        this.notes = notes;
        this.examples = examples;
    }

    getId = (): string => {
        return this.id;
    };

    getText = (): string => {
        return this.text;
    };
    
    getMeanings = (): string[] => {
        return this.meanings ?? [];
    };

    getNotes = (): string[] => {
        return this.notes ?? [];
    };

    getExamples = (): string[] => {
        return this.examples ?? [];
    }
}   