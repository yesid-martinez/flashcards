import { Favorite } from "../models/Favorite";
import { IDBClient } from "../storage/IDB/IDBClient";

import favsData from "../../data/favorites.json" assert { type: "json" };

export class FavoriteRepository {
  private favorites: Favorite[] = [];

  constructor(
      private idb: IDBClient
    ) {}
    
  async initIDBClient() {
          this.favorites = await this.getFavoritesFromIDB();
  }

  private async getFavoritesFromIDB(): Promise<Favorite[]> {
  const stored = await this.idb.getAll<{ cardId: string }>("favorites");

  if (stored.length > 0) {
    return stored.map(r => new Favorite(r.cardId));
  }

  const initial = favsData.map(f => new Favorite(f.cardId));

  await Promise.all(
    initial.map(f =>
      this.idb.add("favorites", { cardId: f.getCardId() })
    )
  );

  return initial;
}

  async getFavorites(): Promise<Favorite[]> {
    return this.favorites;
  }

  async add(cardId: string): Promise<void> {
    await this.idb.add("favorites", { cardId });
    this.favorites.push(new Favorite(cardId));
  }

  async remove(cardId: string): Promise<void> {
    await this.idb.delete("favorites", cardId);
    this.favorites = this.favorites.filter(fav => fav.getCardId() !== cardId);
  }

  isFavorite(cardId: string): boolean {
    return this.favorites.some(fav => fav.getCardId() === cardId);
  }
}