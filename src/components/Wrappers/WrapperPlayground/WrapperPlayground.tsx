import React from 'react';
import './WrapperPlayground.scss';

interface WrapperPlaygroundProps {
  children: React.ReactNode;
}

const WrapperPlayground: React.FC<WrapperPlaygroundProps> = ({ children }) => {
  return <div className='wrapper-playground'>{children}</div>;
};

export default WrapperPlayground;
