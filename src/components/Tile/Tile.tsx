import React from 'react';
import './Tile.scss';
import type { Tile } from '../../store/gameStore';

interface TileProps {
  tile: Tile;
  onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ tile, onClick }) => {
  return (
    <div className='wrapper-tile'>
      <div
        className='tile'
        onClick={!tile.isRevealed && !tile.isMatched ? onClick : undefined}
        data-revealed={tile.isRevealed}
        data-matched={tile.isMatched}
      >
        {tile.isRevealed || tile.isMatched ? (
          <span className='emoji'>{tile.emoji}</span>
        ) : (
          <div className='tile-cover' />
        )}
      </div>
    </div>
  );
};

export default Tile;
