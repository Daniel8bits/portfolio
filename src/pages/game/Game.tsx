import ContentPanel from '@layouts/contentPanel/ContentPanel';
import Column from '@layouts/grid/Column';
import Row from '@layouts/grid/Row';
import MainLayout from '@layouts/mainLayout/MainLayout';
import React from 'react';

import LevelDesignSketchPNG from '@images/level-design-sketch.png'
import Modeling1PNG from '@images/modeling1.png'
import Modeling2PNG from '@images/modeling2.png'
import Modeling3PNG from '@images/modeling3.png'

import SpecialMention from '@components/specialMention/SpecialMention';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import PlayButton from '@components/playButton/PlayButton';
import GithubButton from '@components/githubButton/GithubButton';
import ImageGroup from '@components/imageGroup/ImageGroup';

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
          <Column>
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
        <Row>
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
            <h2> TECHNICAL ASPECTS </h2>
          </Column>
        </Row>
        <Row>
          <Column xl={6}>
            <p>
              In the beginning I didn&apos;t know from where to start, everything I had was the idea of making
              a game with Doom mechanics and that could resemble the unconfortable horror atmosphere from
              Purgatory 2 which is actually my favorite kind of horror technique.
              So I started making the level concept, the game objective had to be simple, the character 
              just starts somewhere, go through an obscure factory-like labyrinth filled with obstacles
              and monsters and then reaches the final point trying not to die middle way.
              To have a better image in my mind, I drew a level design sketch
              saying where the character starts, where has to reach and how the main obstacles
              would be distributed through the labyrinth.
              With this, I was able to go to the next step: modeling.
            </p>
          </Column>
          <Column xl={6}>
            <img src={LevelDesignSketchPNG} alt="level design sketch" />
            <small> Green: the panels </small>
            <br />
            <small> Purple: monsters </small>
            <br />
            <small> Blue: area with door panels </small>
          </Column>
        </Row>
        <Row>
          <Column xl={6}>
            <ImageGroup
              images={[
                {src: Modeling1PNG, alt:"hexagon hall"},
                {src: Modeling2PNG, alt:"hexagon hall texture UV mapping"},
                {src: Modeling3PNG, alt:"door panel"}
              ]}
            />
          </Column>
          <Column xl={6}>
            <p>
              To me, the modeling part was a bit boring and hard to maintain a good workflow, but soon
              I managed to understand how the models should be handled and exported to the game
              without lose the original editable mesh and at the same time exporting a suitable mesh for
              rendering in game which basically consisted in being triangulated and the normal 
              vectors well calculated.
              Once I figured out a good work pipeline, everything started going fast: models the mesh,
              creates the texture, maps the texture, duplicates the mesh to prepare 
              the copy to be exported while maintain the original one preserved, triangulates the copy, 
              recalculates the normals and exports as OBJ file: The object was ready to be loaded.
            </p>
            <p>
              I also have a bit of skills with drawing, but due to time I choose to take some pre made
              textures from internet and assemble them to create the textures for the map.
              I tried to find something good for the monsters, but I coudn&apos;t, so I drew the sprite 
              myself on Krita.
            </p>
          </Column>
        </Row>
        <Row>
          <Column>
            <p>
              The techniques used are listed down below
            </p>
            <ul>
              <li> Phong illumination </li>
              <li> Basic physics engine that works for dynamic and static entities</li>
              <li> Bloom postprocess effect </li>
              <li> Basic gun slider animation when shooting </li>
              <li> Fading in and out postprocess when changing between scenes </li>
              <li> Mask filtering on door panel displays </li>
              <li> Door opening cutscenes </li>
              <li> Pathfinding implementation using A* algorithm </li>
              <li> Text rendering </li>
              <li> HUD and GUI rendering using orthographic projection </li>
            </ul>
            <p>

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