import { IDBClient } from "../infrastructure/storage/IDB/IDBClient";

export class IDBController {
    idbClient: IDBClient;
    constructor() {
        this.idbClient =  new IDBClient();
    }

    initDB = async (): Promise<void> => {
        await this.idbClient.initializeDB();
    }

    getStoreData = async <T>(storeName: string): Promise<T[]> => {
        const data = await this.idbClient.getAll<T>(storeName);
        return data;
    }
}