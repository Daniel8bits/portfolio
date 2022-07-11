import SideMenu from '@components/sideMenu/SideMenu';
import React from 'react';
import SimpleBar from 'simplebar-react';

interface MainLayoutProps {
  
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <div className='main-layout'>
      <SideMenu />
      <SimpleBar style={{ maxHeight: '100%' }}>
        {props.children}
      </SimpleBar>
    </div>
  );
};

export default MainLayout;