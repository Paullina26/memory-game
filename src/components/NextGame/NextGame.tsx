import ButtonBig from '../Buttons/ButtonBig/ButtonBig';
import { useGameStore } from '../../store/gameStore';

const NextGame: React.FC = () => {
  const { initializeGame } = useGameStore();

  const handleRestart = () => initializeGame();

  return (
    <div className='next-game'>
      <h2>Game Over!</h2>
      <ButtonBig
        buttonText='Restart Game'
        targetPage='PageGame'
        onClick={handleRestart}
      />
    </div>
  );
};

export default NextGame;
