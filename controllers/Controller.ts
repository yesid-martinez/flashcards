import { CardController } from "./CardController";
import { IDBController } from "./IDBController";
import { FavoriteController } from "./FavoriteController";

export class Controller {
    constructor() {
    }
    
    async run(): Promise<void> {
        const idbController = new IDBController();
        await idbController.initDB();

        const favoriteController = new FavoriteController(idbController.idbClient);
        const favorites = await favoriteController.init();

        const cardController = new CardController();
        cardController.init();
    }
}