import { IDBClient } from "../infrastructure/storage/IDB/IDBClient";

export class IDBController {
    constructor() {}

    initDB = async (): Promise<void> => {
        const idbClient = new IDBClient();
        await idbClient.initializeDB();
    }
}