import SideMenu from '@components/sideMenu/SideMenu';
import React, { useState } from 'react';

import {FaBars} from 'react-icons/fa'

interface MobileMenuProps {
  
}

const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className='mobile-menu'>
      <button type='button' onClick={() => setOpen(true)}><FaBars  /></button>
      <div 
        className={`menu ${open && 'open'}`}
        onClick={() => setOpen(false)}
        role='menu'
        tabIndex={0}
      >
        <SideMenu  />
      </div>
    </div>
  );
};

export default MobileMenu;