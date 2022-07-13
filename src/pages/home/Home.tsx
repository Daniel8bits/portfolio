import Avatar from '@components/avatar/Avatar';
import ContentPanel from '@layouts/contentPanel/ContentPanel';
import Column from '@layouts/grid/Column';
import Row from '@layouts/grid/Row';
import MainLayout from '@layouts/mainLayout/MainLayout';
import React from 'react';
import { Link } from 'react-router-dom';

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
          <Column sm={4} lg={4} xl={7}> 
            <h1> Daniel Noguês de Oliveira </h1> 
            <br  />
            <p>
              I&apos;m a guy who likes to reinvent the wheel and rediscover the fire
              just to understand how things work <i> and definitely not because I always forget
              to check if the library already exists ;~; </i>
            </p>
            <p>
              I&apos;m 23 years old, brasilian 🇧🇷, currently studying Computer Science at <a href='https://portal.ufpel.edu.br/'> Federal University of Pelotas (UFPel) </a>
              and have tons of experience in programming got from some private projects.
            </p>
            <p>
              The technologies I know are: C, C++, Java, Javascript, NodeJS, PostgreSQL, 
              OpenGL, GLSL, Blender and how to use a coffee machine which, everyone knows, is the purpose of a CS degree.
            </p>
          </Column>
          <Column sm={4} lg={4} xl={5}> 
            <Avatar  /> 
          </Column>
        </Row>
        <Row>
          <Column>
            <h2> Contacts </h2>
          </Column>
        </Row>
        <Row>
          <Column>
            <p>
              <b>Phone: </b> +55 (53) 999471840
              <br />
              <b>Email: </b> daniel.sftm@outlook.com
            </p>
          </Column>
        </Row>
      </ContentPanel>
    </MainLayout>
  );
};

export default Home;