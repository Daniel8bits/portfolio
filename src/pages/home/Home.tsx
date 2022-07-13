import Avatar from '@components/avatar/Avatar';
import ContentPanel from '@layouts/contentPanel/ContentPanel';
import Column from '@layouts/grid/Column';
import Row from '@layouts/grid/Row';
import MainLayout from '@layouts/mainLayout/MainLayout';
import React from 'react';

interface HomeProps {
  
}

const Home: React.FC<HomeProps> = () => {
  return (
    <MainLayout className='home'>
      <ContentPanel>
        <Row>
          <Column>
            <h2> Who am I? </h2>
          </Column>
        </Row>
        <Row>
          <Column sm={4} lg={4} xl={6}> <h1> Daniel Noguês de Oliveira </h1> </Column>
          <Column sm={4} lg={4} xl={6}> 
            <Avatar  /> 
          </Column>
        </Row>
        <Row>
          <Column xl={4}> 3 </Column>
          <Column xl={4}> 4 </Column>
          <Column xl={4}> 5 </Column>
        </Row>
      </ContentPanel>
    </MainLayout>
  );
};

export default Home;