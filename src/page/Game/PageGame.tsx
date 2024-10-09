import React, { useEffect, useRef, useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import Tile from '../../components/Tile/Tile';
import './PageGame.scss';
import NextGame from '../../components/NextGame/NextGame';
import HomeButton from '../../components/Buttons/HomeButton/HomeButton';

const PageGame: React.FC = () => {
  const {
    tiles,
    revealedTiles,
    matchedPairs,
    attempts,
    timeElapsed,
    initializeGame,
    revealTile,
    checkForMatch,
    endGame,
  } = useGameStore();

  const [gameEnded, setGameEnded] = useState(false);

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    initializeGame();
    timerRef.current = window.setInterval(() => {
      const { startTime } = useGameStore.getState();
      if (startTime) {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        useGameStore.setState({ timeElapsed: elapsed });
      }
    }, 1000);
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, [initializeGame]);

  useEffect(() => {
    if (revealedTiles.length === 2) {
      checkForMatch();
    }
  }, [revealedTiles, checkForMatch]);

  useEffect(() => {
    const totalPairs = tiles.length / 2;
    if (matchedPairs === totalPairs && totalPairs > 0) {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      endGame();
      setGameEnded(true);
    }
  }, [matchedPairs, tiles.length, endGame]);

  const columns = tiles.length === 12 ? 3 : 4;

  return (
    <div className='game-page'>
      <HomeButton />
      <div className='stats'>
        <p>Attempts: {attempts}</p>
        <p>Duration: {timeElapsed}s</p>
      </div>
      <div className='tile-container' data-columns={columns}>
        {tiles.map(tile => (
          <Tile key={tile.id} tile={tile} onClick={() => revealTile(tile.id)} />
        ))}
      </div>
      {gameEnded && <NextGame />}
    </div>
  );
};

export default PageGame;
