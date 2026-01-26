import type { Favorite } from "../infrastructure/models/Favorite";
import { FavoriteRepository } from "../infrastructure/repositories/FavoriteRepository";
import { IDBClient } from "../infrastructure/storage/IDB/IDBClient";
import { FavoriteIcon } from "../ui/favorites/FavoriteIcon";

export class FavoriteController {
    repository: FavoriteRepository;
    favoriteIcon: FavoriteIcon;

    constructor(idbClient: IDBClient) {
        this.repository = new FavoriteRepository(idbClient);
        this.favoriteIcon = new FavoriteIcon();
    }

    async initRepo(): Promise<void> {
        await this.repository.initIDBClient();
    }
}