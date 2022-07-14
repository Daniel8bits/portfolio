import Column from '@layouts/grid/Column';
import Row from '@layouts/grid/Row';
import {FaGithub} from 'react-icons/fa'
import React from 'react';

interface SpecialMentionProps {
  name: string
  image: string
  github: string
}

const SpecialMention: React.FC<SpecialMentionProps> = (props) => {
  return (
    <div className='special-mention'>
      <Row>
        <Column>
          <h3>{props.name}</h3>
        </Column>
      </Row>
      <Row>
        <Column xl={3}>
          <img src={props.image} alt={`${props.name}`} />
        </Column>
        <Column xl={9}>
          <Row>
            <Column>
              <p>{props.children}</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <a href={props.github} rel='noreferrer' target='_blank'>
                <FaGithub  />
                @{props.github.split('/').pop()}
              </a>
            </Column>
          </Row>
        </Column>
      </Row>
    </div>
  );
};

export default SpecialMention;