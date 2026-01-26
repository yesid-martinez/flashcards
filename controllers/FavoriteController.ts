import type { Favorite } from "../infrastructure/models/Favorite";
import { FavoriteRepository } from "../infrastructure/repositories/FavoriteRepository";
import { IDBClient } from "../infrastructure/storage/IDB/IDBClient";

export class FavoriteController {
    repository: FavoriteRepository;

    constructor(idbClient: IDBClient) {
        this.repository = new FavoriteRepository(idbClient);
    }

    async init(): Promise<Favorite[]> {
        const favorites = await this.repository.getFavorites();
        return favorites;
    }

}