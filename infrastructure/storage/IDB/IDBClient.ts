import { IDBConfig } from './IDBConfig';

export class IDBClient {
  db!: IDBDatabase;
  
  private readonly config: IDBConfig;
  
  constructor() {
    this.config = new IDBConfig();  
  }

  async initializeDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.config.dbName, this.config.version);
      
      request.onupgradeneeded = () => {
        const db = request.result;

        this.config.storeList.forEach(store => {
          if (!db.objectStoreNames.contains(store.name)) {
            db.createObjectStore(store.name, {
              keyPath: store.keyPath
            });
          }

        });
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onerror = () => reject(request.error);
    });
  }
}