const emojis = [
  '🍎',
  '🍌',
  '🍓',
  '🍇',
  '🍉',
  '🍒',
  '🍑',
  '🍍',
  '🥝',
  '🥭',
  '🍐',
  '🍋',
];

export const getTileImagesForDifficulty = (
  difficulty: 'easy' | 'medium' | 'hard'
): string[] => {
  let numberOfPairs;

  switch (difficulty) {
    case 'easy':
      numberOfPairs = 6;
      break;
    case 'medium':
      numberOfPairs = 8;
      break;
    case 'hard':
      numberOfPairs = 12;
      break;
    default:
      numberOfPairs = 6;
  }
  return emojis.slice(0, numberOfPairs);
};
