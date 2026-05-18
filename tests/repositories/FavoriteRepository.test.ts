import { beforeEach, describe, expect, it } from 'vitest';

import { FavoriteRepository } from '../../infrastructure/repositories/FavoriteRepository';

class FakeIDBClient {
  private data: any[] = [];

  async getAll() {
    return this.data;
  }

  async add(_: string, value: any) {
    this.data.push(value);
  }

  async delete(_: string, key: string) {
    this.data = this.data.filter(x => x.cardId !== key);
  }
}

describe('FavoriteRepository', () => {
  let repo: FavoriteRepository;

  beforeEach(async () => {
    const fakeDB = new FakeIDBClient();

    repo = new FavoriteRepository(fakeDB as any);

    await repo.initIDBClient();
  });

  it('should add a favorite', async () => {
    await repo.add('1');

    expect(repo.isFavorite('1')).toBe(true);
  });

  it('should remove a favorite', async () => {
    await repo.add('1');

    await repo.remove('1');

    expect(repo.isFavorite('1')).toBe(false);
  });
});