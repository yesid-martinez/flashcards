import { CardController } from "./CardController";
import { IDBController } from "./IDBController";

export class Controller {
    constructor() {
    }
    
    run(): void {
        const idbController = new IDBController();
        idbController.initDB();

        const cardController = new CardController();
        cardController.init();
    }
}