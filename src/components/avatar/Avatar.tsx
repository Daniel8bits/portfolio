import React from 'react';
import AvatarImage from '@images/eu.jpeg'

interface AvatarProps {
  
}

const Avatar: React.FC<AvatarProps> = () => {
  return (
    <img className='avatar' src={AvatarImage} alt='avatar'  />
  );
};

export default Avatar;