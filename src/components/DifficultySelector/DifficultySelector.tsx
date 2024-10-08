import React, { useState } from 'react';

import { useAppStore } from '../../store/appStore';
import { useGameStore } from '../../store/gameStore';

import ButtonBig from '../Buttons/ButtonBig/ButtonBig';
import '../Title/Title.scss';

import './DifficultySelector.scss';

const gameLevels: ('easy' | 'medium' | 'hard')[] = ['easy', 'medium', 'hard'];

const DifficultySelector: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    'easy' | 'medium' | 'hard'
  >('easy');
  const setDifficulty = useGameStore(state => state.setDifficulty);
  const setCurrentPage = useAppStore(state => state.setCurrentPage);

  const handleStartGame = () => {
    setDifficulty(selectedDifficulty);
    setCurrentPage('PageGame');
  };

  return (
    <div className='wrapper-difficulty-selector'>
      <h2 className='title-big '>Select Difficulty</h2>
      {gameLevels.map(level => (
        <label key={level} className='difficulty-selector'>
          <input
            type='radio'
            value={level}
            checked={selectedDifficulty === level}
            onChange={() => setSelectedDifficulty(level)}
          />
          <span></span>
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </label>
      ))}
      <ButtonBig
        targetPage='PageGame'
        buttonText='START GAME'
        onClick={handleStartGame}
      />
    </div>
  );
};

export default DifficultySelector;
