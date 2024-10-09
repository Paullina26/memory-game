import { useGameStore } from '../../store/gameStore';
import { useEffect, useState } from 'react';

import './PageStatistic.scss';
import '../../components/Title/Title.scss';
import HomeButton from '../../components/Buttons/HomeButton/HomeButton';

const PageStatistic: React.FC = () => {
  const [gameHistory, setGameHistory] = useState<
    { date: string; attempts: number; duration: number }[]
  >([]);

  useEffect(() => {
    const history = useGameStore.getState().getGameHistory();
    setGameHistory(history);
  }, []);
  return (
    <div className='wrapper-statistic'>
      <h1 className='title-big'>Statistic</h1>
      <HomeButton />
      <div className='wrapper-element-statistic'>
        {gameHistory.length > 0 ? (
          gameHistory.map((game, index) => (
            <div key={index} className='game-history-item'>
              <p>Date: {new Date(game.date).toLocaleString()}</p>
              <p>Duration: {game.duration}s</p>
              <p>Attempts: {game.attempts}</p>
            </div>
          ))
        ) : (
          <p>No game history available.</p>
        )}
      </div>
    </div>
  );
};

export default PageStatistic;
