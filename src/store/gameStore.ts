import { create } from 'zustand';
import { shuffleTiles } from '../helpers/shuffleTiles';
import { getTileImagesForDifficulty } from '../helpers/getTileImagesForDifficulty';
import { createTiles } from '../helpers/createTiles';

export interface Tile {
  id: number;
  image: string;
  emoji: string;
  isRevealed: boolean;
  isMatched: boolean;
}

interface GameState {
  tiles: Tile[];
  revealedTiles: Tile[];
  matchedPairs: number;
  attempts: number;
  timeElapsed: number;
  startTime: number | null;
  difficulty: 'easy' | 'medium' | 'hard';
  setDifficulty: (level: 'easy' | 'medium' | 'hard') => void;
  initializeGame: () => void;
  revealTile: (tileId: number) => void;
  incrementAttempt: () => void;
  checkForMatch: () => void;
  resetGame: () => void;
  endGame: () => void;
  getGameHistory: () => { date: string; attempts: number; duration: number }[];
}

export const useGameStore = create<GameState>((set, get) => ({
  tiles: [],
  revealedTiles: [],
  matchedPairs: 0,
  attempts: 0,
  timeElapsed: 0,
  startTime: null,
  difficulty: 'easy',

  setDifficulty: level => set({ difficulty: level }),

  initializeGame: () => {
    const { difficulty } = get();
    const tileImages = getTileImagesForDifficulty(difficulty);
    const tiles = shuffleTiles(createTiles(tileImages));
    set({
      tiles,
      revealedTiles: [],
      matchedPairs: 0,
      attempts: 0,
      timeElapsed: 0,
      startTime: Date.now(),
    });
  },

  revealTile: tileId => {
    const { tiles, revealedTiles } = get();
    if (revealedTiles.length < 2) {
      const tileIndex = tiles.findIndex(t => t.id === tileId);
      if (
        tileIndex !== -1 &&
        !tiles[tileIndex].isRevealed &&
        !tiles[tileIndex].isMatched
      ) {
        tiles[tileIndex].isRevealed = true;
        set({ revealedTiles: [...revealedTiles, tiles[tileIndex]], tiles });
      }
    }
  },

  incrementAttempt: () => set(state => ({ attempts: state.attempts + 1 })),

  checkForMatch: () => {
    const { revealedTiles, tiles } = get();
    if (revealedTiles.length === 2) {
      const [tile1, tile2] = revealedTiles;
      if (tile1.image === tile2.image) {
        tile1.isMatched = true;
        tile2.isMatched = true;
        set(state => ({
          matchedPairs: state.matchedPairs + 1,
          revealedTiles: [],
          tiles,
        }));
      } else {
        setTimeout(() => {
          tile1.isRevealed = false;
          tile2.isRevealed = false;
          set({ revealedTiles: [], tiles });
        }, 1000);
      }
      get().incrementAttempt();
    }
  },

  resetGame: () => {
    get().initializeGame();
  },

  endGame: () => {
    const { attempts, timeElapsed } = get();
    const history = JSON.parse(localStorage.getItem('gameHistory') || '[]');
    history.push({
      date: new Date().toISOString(),
      attempts,
      duration: timeElapsed,
    });
    localStorage.setItem('gameHistory', JSON.stringify(history));
  },

  getGameHistory: () => {
    return JSON.parse(localStorage.getItem('gameHistory') || '[]');
  },
}));
