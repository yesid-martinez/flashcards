export const config = { dbName: "FlashcardsDB", version: 1 };
export const stores= [
    { name: "cards", keyPath: "id" },
    { name: "favorites", keyPath: "cardId" }
];