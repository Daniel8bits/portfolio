import React from 'react';
import MenuButton from './MenuButton';

interface SideMenuProps {
  
}

const SideMenu: React.FC<SideMenuProps> = () => {
  return (
    <nav className='side-menu'>
      <ul>
        <MenuButton to='/'> Me </MenuButton>
        <MenuButton to='/game'> My game </MenuButton>
      </ul>
    </nav>
  );
};

export default SideMenu;