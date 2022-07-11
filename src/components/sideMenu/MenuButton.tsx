import React from 'react';
import { Link } from 'react-router-dom';

interface MenuButtonProps {
  to: string
  children: string
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  return (
    <li className='menu-button'>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
};

export default MenuButton;