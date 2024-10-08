import { Tile } from '../store/gameStore';

export const shuffleTiles = (tiles: Tile[]): Tile[] => {
  return tiles.sort(() => Math.random() - 0.5);
};
