import { CardController } from "./CardController";

export class Controller {
    constructor() {
    }
    
    run(): void {
        const cardController = new CardController();
        cardController.init();
    }
}