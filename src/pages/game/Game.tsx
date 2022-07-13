import ContentPanel from '@layouts/contentPanel/ContentPanel';
import MainLayout from '@layouts/mainLayout/MainLayout';
import React from 'react';

interface GameProps {
  
}

const Game: React.FC<GameProps> = () => {
  return (
    <MainLayout className='home'>
      <ContentPanel>
        my game
      </ContentPanel>
    </MainLayout>
  );
};

export default Game;