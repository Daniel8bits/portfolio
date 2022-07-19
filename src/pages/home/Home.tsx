import Avatar from '@components/avatar/Avatar';
import ContentPanel from '@layouts/contentPanel/ContentPanel';
import Column from '@layouts/grid/Column';
import Row from '@layouts/grid/Row';
import MainLayout from '@layouts/mainLayout/MainLayout';
import React from 'react';
import MagnifiquePNG from '@images/magnifique.png'

interface HomeProps {
  
}

const Home: React.FC<HomeProps> = () => {
  window.document.title = 'Daniel Oliveira'
  return (
    <MainLayout className='home'>
      <ContentPanel>
        <Row>
          <Column>
            <h2> Who am I? </h2>
          </Column>
        </Row>
        <Row>
          <Column lg={7} xl={7}> 
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
          <Column lg={5} xl={5}> 
            <Avatar  /> 
          </Column>
        </Row>
        <Row>
          <Column>
            <h2> my-progress.log </h2>
          </Column>
        </Row>
        <Row>
          <Column>
            <p>
              Creation: The reason I started studying CS.
            </p>
            <p>
              Have you ever asked yourself how God felt himself in front of his creation when it was done? 
              What is it like seeing something you created coming alive?
              As a christian that&apos;s something that always came to my mind and maybe what moved me
              towards the closest activity to God&apos;s creating: programming and game development.
            </p>
            <p>
              I started studying about game development when I was still at high school and found out that
              programming was the path after watching tons of errors stack traces from Minecraft when the game crashed.
              The first oportunity I had to take a game development course that came out, I grabbed. 
              This wasn&apos;t the better course, but I could learn the most basic things.
              After that I focused on programming, started by C, then C++, then Java and meanwhile I was also studying web development (JS, PHP, NodeJS)
              and had started a Computer Science program.
            </p>
            <p>
              In the third semester of college, I made my first 2D game engine using Java AWT graphics API 
              for a game I had to make as the last work of OOP.
              Although this engine didn&apos;t use the standard techniques most of OpenGL engine uses, 
              it worked and was capable of delivering the work. Unfortunately, I couldn&apos;t finish the game properly
              due to time limit. My goal was too high.
            </p>
            <p>
              After that I started learning OpenGL with Java using LWJGL 3, that was a game changing because most of the problems
              I had in the first engine, due not to know the standards, I could solve and then, in fact, understand the principles and
              base techniques of an OpenGL game engine. And there was my second game engine, a beautiful engine capable of manage 3D entities,
              manage resources with a MongoDB-like resources manager, render using shaders and load 3D objects from FBX files. <b>Simply MAGNIFIQUE!</b>
            </p>
          </Column>
        </Row>
        <Row className='justify-center'>
          <Column lg={6} xl={4} xxl={4}>
            <img src={MagnifiquePNG} alt="magnifique!!!" />
          </Column>
        </Row>
        <Row>
          <Column>
            <p>
              Some semesters after that, since I registered for Computer Graphics course, I decided to
              make a new game engine in Typescript just in case I needed it for a work.
              And, yep, I needed it.
              First I used to make a scene editor with UI for the first work and then
              I made my first 3D game: A horror game whose mechanics were based on Doom and the visuals inspired on Purgatory 2.
              That was a success and can be played here on my site (just go on MY GAME in the menu).
            </p>
            <p>
              I really like this. 
              As well as the game development itself, making the engine was really satisfactory.
              Creating high goals and trying to achieve them make me learn a lot.
              Even if I don&apos;t achieve them sometimes, what I learn in the progress is awesome
              and, in that exactly moment, I&apos;m trying to move on new goals.
            </p>
          </Column>
        </Row>
        <Row>
          <Column>
            <h2> What I&apos;m looking for? </h2>
          </Column>
        </Row>
        <Row>
          <Column>
            <p>
              <i>For God&apos;s sake, please, gimme a job ;~;</i>
            </p>
            <p>
              Something that I would appreciate is the experience of game development in a 
              real project for market through an internship. 
              Getting in touch with a professional work pipeline would
              be interesting and a great opportunity to learn more and better.
            </p>
          </Column>
        </Row>
        <Row>
          <Column>
            <h2> Contacts </h2>
          </Column>
        </Row>
        <Row>
          <Column className='contacts'>
            <p>
              <b>Phone: </b> +55 (53) 999471840
            </p>
            <p>
              <b>Email: </b> daniel.sftm@outlook.com
            </p>
          </Column>
        </Row>
      </ContentPanel>
    </MainLayout>
  );
};

export default Home;