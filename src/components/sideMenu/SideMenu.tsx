import React from 'react';
import {FaGithub} from 'react-icons/fa'
import MenuButton from './MenuButton';

interface SideMenuProps {
  
}

const SideMenu: React.FC<SideMenuProps> = () => {
  return (
    <nav className='side-menu'>
      <ul>
        <MenuButton to='/'> Me </MenuButton>
        <MenuButton to='/game'> My game </MenuButton>
        <MenuButton to='https://github.com/Daniel8bits' external> 
          <FaGithub  /> My github 
        </MenuButton>
      </ul>
    </nav>
  );
};

export default SideMenu;