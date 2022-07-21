import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';

interface ImageGroupProps {
  images: {src: string, alt: string}[]
}

const ImageGroup: React.FC<ImageGroupProps> = (props) => {
  const [current, setCurrent] = useState<number>(0);
  return (
    <div className='image-group'>
      <img src={props.images[current].src} alt={props.images[current].alt} />
      <SimpleBar style={{ maxHeight: '5rem'}}>
        {props.images.map((image, key) => {
          return (
            <img 
              src={image.src} 
              key={image.src} 
              alt={image.alt} 
              onClick={() => setCurrent(key)}
            />
          )
        })}
      </SimpleBar>
    </div>
  );
};

export default ImageGroup;