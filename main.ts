import { CardController } from "./controllers/CardController";
import { JSONCardRepository } from "./infraestructure/repositories/JSONCardRepository";

const controller = new CardController(new JSONCardRepository());
controller.init();