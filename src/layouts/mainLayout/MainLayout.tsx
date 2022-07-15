import MobileMenu from '@components/mobileMenu/MobileMenu';
import SideMenu from '@components/sideMenu/SideMenu';
import React, { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';

interface MainLayoutProps {
  className?: string
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.onresize = () => {
      setScreenWidth(window.innerWidth)
    }
  }, []);

  if(screenWidth <= 800) {
    return (
      <div className={`main-layout ${props.className ?? ''}`}>
        <MobileMenu  />
        <div>
          {props.children}
        </div>
      </div>
    );
  }

  return (
    <div className={`main-layout ${props.className ?? ''}`}>
      <SideMenu  />
      <SimpleBar style={{ maxHeight: '100%' }}>
        {props.children}
      </SimpleBar>
    </div>
  );
};

export default MainLayout;