import React from 'react';
import {FaPlay} from 'react-icons/fa'

interface PlayButtonProps {
  to: string
}

const PlayButton: React.FC<PlayButtonProps> = (props) => {
  return (
    <a 
      href={props.to} 
      className='play-button' 
      rel='noreferrer' 
      target='_blank'
    >
      <FaPlay  /> Play
    </a>
  );
};

export default PlayButton;