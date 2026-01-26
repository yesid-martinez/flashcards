import { Favorite } from "../models/Favorite";
import { IDBClient } from "../storage/IDB/IDBClient";

import favsData from "../../data/favorites.json" assert { type: "json" };

export class FavoriteRepository {
  favorites: Promise<Favorite[]>;
  constructor(
      private idb: IDBClient
    ) {
    this.favorites = this.getFavoritesFromIDB();
  }

  private async   getFavoritesFromIDB(): Promise<Favorite[]> {
    const stored = await this.idb.getAll<Favorite>("favorites");

    if (stored && stored.length > 0) {
      return stored;
    }

    console.log("Empty");

    // Fallback
    const initial = favsData.map(fav => new Favorite(fav.cardId));
    
    type FavoriteRecord = {
      cardId: string;
    };
    
    await Promise.all(
      initial.map(fav => this.idb.add<FavoriteRecord>("favorites", fav))
    );

    return initial;
  }

  async getFavorites(): Promise<Favorite[]> {
    return this.favorites;
  }
}