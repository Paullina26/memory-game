import { Tile } from '../store/gameStore';

export const createTiles = (images: string[]): Tile[] => {
  const tiles: Tile[] = [];

  images.forEach((image, index) => {
    tiles.push({
      id: index * 2,
      image,
      emoji: image,
      isRevealed: false,
      isMatched: false,
    });
    tiles.push({
      id: index * 2 + 1,
      image,
      emoji: image,
      isRevealed: false,
      isMatched: false,
    });
  });
  return tiles;
};
