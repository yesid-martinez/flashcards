import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Card } from '../../domain';
import { CardController } from '../../controllers/CardController';

let cards: Card[] = [];
let getAllSpy = vi.fn();
let renderTextSpy = vi.fn();
let animateSpy = vi.fn();
let favoriteClickHandler: (() => void) | undefined;
let lastAnimation: { triggerNext: () => void } | undefined;

vi.mock('../../domain/index', async () => {
  const actual = await vi.importActual<typeof import('../../domain/index')>(
    '../../domain/index'
  );

  return {
    ...actual,
    CardRepository: class {
      async getAll() {
        return getAllSpy();
      }
    }
  };
});

vi.mock('../../ui/card/CardView', () => ({
  CardView: class {
    renderText(card: Card) {
      renderTextSpy(card);
    }

    getFavoriteButton() {
      return {
        addEventListener: (event: string, handler: () => void) => {
          if (event === 'click') {
            favoriteClickHandler = handler;
          }
        }
      };
    }
  }
}));

vi.mock('../../ui/card/CardAnimation', () => {
  class MockCardAnimation {
    private nextHandler?: () => void;

    constructor(_: unknown, private deck: { next: () => unknown }) {
      lastAnimation = this;
    }

    animate(): void {
      animateSpy();
    }

    onNextClick(handler: () => void): void {
      this.nextHandler = handler;
    }

    onCardClick(_: () => void): void {
      return;
    }

    triggerNext(): void {
      this.deck.next();
      this.nextHandler?.();
    }
  }

  return { CardAnimation: MockCardAnimation };
});

describe('CardController', () => {
  beforeEach(() => {
    cards = [
      new Card('1', 'hello', 'hola', [], ''),
      new Card('2', 'world', 'mundo', [], '')
    ];
    getAllSpy = vi.fn().mockResolvedValue(cards);
    renderTextSpy = vi.fn();
    animateSpy = vi.fn();
    favoriteClickHandler = undefined;
    lastAnimation = undefined;
  });

  it('initializes and renders the first card with favorite state', async () => {
    const favorites = new Set(['1']);
    const favoriteIcon = { updateFavoriteIcon: vi.fn() };
    const favoriteRepo = {
      isFavorite: vi.fn((id: string) => favorites.has(id)),
      add: vi.fn(async (id: string) => {
        favorites.add(id);
      }),
      remove: vi.fn(async (id: string) => {
        favorites.delete(id);
      })
    };

    const controller = new CardController({
      repository: favoriteRepo,
      favoriteIcon
    } as any);

    await controller.init();

    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(renderTextSpy).toHaveBeenCalledWith(cards[0]);
    expect(animateSpy).toHaveBeenCalledTimes(1);
    expect(favoriteIcon.updateFavoriteIcon).toHaveBeenCalledWith('1', true);
    expect(favoriteClickHandler).toBeTypeOf('function');
  });

  it('toggles favorite state on favorite button click', async () => {
    const favorites = new Set<string>();
    const favoriteIcon = { updateFavoriteIcon: vi.fn() };
    const favoriteRepo = {
      isFavorite: vi.fn((id: string) => favorites.has(id)),
      add: vi.fn(async (id: string) => {
        favorites.add(id);
      }),
      remove: vi.fn(async (id: string) => {
        favorites.delete(id);
      })
    };

    const controller = new CardController({
      repository: favoriteRepo,
      favoriteIcon
    } as any);

    await controller.init();
    favoriteClickHandler?.();
    await favoriteRepo.add.mock.results[0].value;
    await Promise.resolve();

    expect(favoriteRepo.add).toHaveBeenCalledWith('1');
    expect(favoriteIcon.updateFavoriteIcon).toHaveBeenLastCalledWith('1', true);
  });

  it('updates favorite icon when moving to next card', async () => {
    const favorites = new Set(['2']);
    const favoriteIcon = { updateFavoriteIcon: vi.fn() };
    const favoriteRepo = {
      isFavorite: vi.fn((id: string) => favorites.has(id)),
      add: vi.fn(async (id: string) => {
        favorites.add(id);
      }),
      remove: vi.fn(async (id: string) => {
        favorites.delete(id);
      })
    };

    const controller = new CardController({
      repository: favoriteRepo,
      favoriteIcon
    } as any);

    await controller.init();

    lastAnimation?.triggerNext();

    expect(favoriteIcon.updateFavoriteIcon).toHaveBeenLastCalledWith('2', true);
  });
});
