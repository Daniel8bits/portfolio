import React from 'react';
import {FaGithub} from 'react-icons/fa'

interface GithubButtonProps {
  to: string
}

const GithubButton: React.FC<GithubButtonProps> = (props) => {
  return (
    <a 
      href={props.to} 
      className='github-button' 
      rel='noreferrer' 
      target='_blank'
    >
      <FaGithub  /> Source Code
    </a>
  );
};

export default GithubButton;