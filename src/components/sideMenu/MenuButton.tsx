import React from 'react';
import { Link } from 'react-router-dom';

interface MenuButtonProps {
  to: string
  external?: boolean
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {

  if(props.external) {
    return (
      <li className='menu-button'>
        <a href={props.to} rel='noreferrer' target='_blank'>{props.children}</a>
      </li>
    );  
  }

  return (
    <li className='menu-button'>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
};

export default MenuButton;