import React from 'react';
import '../../components/Wrappers/WrapperGlassEffect/WrapperGlassEffect.scss';
import './PageInstruction.scss';

import ButtonBig from '../../components/Buttons/ButtonBig/ButtonBig';

const PageInstruction: React.FC = () => {
  return (
    <div>
      <div className='wrapperInstruction'>
        <div>
          <h4> Goal of the Game: </h4>
          <p>
            The goal of the game is to find all pairs of cards with the same
            images, remembering their positions.
          </p>
          <h4>Game Rules:</h4>
          <p>
            The game starts with a set of cards laid face down. In each turn,
            the player flips over two cards. If the cards have the same image,
            they remain uncovered and the player can continue their turn. If the
            cards are different, they are turned face down again.
          </p>
          <p>
            <b>The game ends when all pairs of cards have been found.</b>
          </p>
        </div>
      </div>
      <ButtonBig targetPage='PageGame' buttonText='PLAY' />
    </div>
  );
};

export default PageInstruction;
