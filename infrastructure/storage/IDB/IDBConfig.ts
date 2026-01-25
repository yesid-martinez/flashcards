import { config, stores } from './dbConfig';

type Store = {
  name: string;
  keyPath?: string;
};

type dbConfig = {
    dbName: string;
    version: number;
};

export class IDBConfig {
        private readonly dbConfig: dbConfig;
        private readonly stores: Store[];
    constructor(
    ) {
        this.dbConfig = config;
        this.stores = stores;
    }

    get dbName(): string {
        return this.dbConfig.dbName;
    }

    get version(): number {
        return this.dbConfig.version;
    }

    get storeList(): Store[] {
        return this.stores;
    }
};