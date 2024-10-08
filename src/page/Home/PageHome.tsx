import React from 'react';
import './PageHome.scss';
import '../../components/Title/Title.scss';
import ButtonBig from '../../components/Buttons/ButtonBig/ButtonBig';

const PageHome: React.FC = () => {
  return (
    <div className='WrapperHomePage'>
      <h1 className='title-big'>Welcome Memory Game</h1>
      <ButtonBig targetPage='DifficultySelector' buttonText='PLAY' />
      <ButtonBig targetPage='PageInstructions' buttonText='Instruction' />
      <ButtonBig targetPage='PageStatistic' buttonText='Statistic' />
    </div>
  );
};

export default PageHome;
