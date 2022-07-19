import ContentPanel from '@layouts/contentPanel/ContentPanel';
import Column from '@layouts/grid/Column';
import Row from '@layouts/grid/Row';
import MainLayout from '@layouts/mainLayout/MainLayout';
import React from 'react';

import LevelDesignSketch from '@images/level-design-sketch.png'
import SpecialMention from '@components/specialMention/SpecialMention';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import PlayButton from '@components/playButton/PlayButton';
import GithubButton from '@components/githubButton/GithubButton';

interface GameProps {
  
}

const Game: React.FC<GameProps> = () => {
  window.document.title = 'My Game'
  return (
    <MainLayout className='game'>
      <ContentPanel>
        <Row>
          <Column>
            <h2> My Game </h2>
          </Column>
        </Row>
        <Row>
          <Column className='title' xl={9}>
            <h1> The <i>nameless</i> horror game </h1>
          </Column>
          <Column xl={3}>
            <PlayButton to='https://horrorgame.danieloliveira.me'  />
          </Column>
        </Row>
        <Row>
          <Column>
            <LiteYouTubeEmbed
              id="0kYLJj6tkb8"
              title="the nameless horror game"
              params='controls=0'
              muted
            />
          </Column>
        </Row>
        <Row>
          <Column xl={6}>
            <p>
              This was a game that I and my teammate made as a college computer graphics work. 
              The game design as well as the level design and modeling were made by me.
              The programming part, that was the most fun, was made by both of us.
            </p>
            <p>
              The idea was making a game inspired on Doom but with its own identity and feeling.
              We tried to create a tense and uncomfortable atmosphere using music and audio effects.
              The game visuals was inspired on Purgatory 2, a not so known RPG Maker game.
            </p>
            <p>
              And, yes, I know the monsters are stupid, but did not have much time to make a whole 2D animation
              for each action. Also, if the monster doesn&apos;t have legs, you don&apos;t need to animate them, right? :D
            </p>
          </Column>
          <Column xl={6}>
            <img src={LevelDesignSketch} alt="level design sketch" />
          </Column>
        </Row>
        <Row>
          <Column xl={3}>
            <PlayButton to='https://horrorgame.danieloliveira.me'  />
          </Column>
          <Column xl={3}>
            <GithubButton to='https://github.com/Daniel8bits/cg-game'  />
          </Column>
        </Row>
        <Row>
          <Column>
            <h2> SOME OBSERVATIONS </h2>
          </Column>
        </Row>
        <Row className='observations'>
          <Column>
            <p>
              In the first access, the game can stop responding for a moment when you enter the main menu
              after the loading, it happens because of the assets creation <i>I guess</i>.
              Once the page has loaded, make sure you clicked the canvas to focus on, otherwise
              you will not be able to control the game.
              You can see the game controls in the instructions menu. 
              To navigate in the main menu use the arrows and enter keys, use ESC key to unfocus the canvas.
            </p>
            <p className='text-yellow-400 font-bold'>
              The assets credits are on the game and can be accessed from the main menu.
            </p>
          </Column>
        </Row>
        <Row>
          <Column>
            <h2> ALSO </h2>
          </Column>
        </Row>
        <Row>
          <Column>
            <SpecialMention
              name="Lucas Alviene Pereira"
              image="https://avatars.githubusercontent.com/u/54518010?v=4"
              github="https://github.com/LucasAlviene"
            >
              He was the teammate who made this game with me. Check out his works, he is
              an awesome programmer too.
            </SpecialMention>
          </Column>
        </Row>
      </ContentPanel>
    </MainLayout>
  );
};

export default Game;