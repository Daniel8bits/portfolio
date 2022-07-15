import React from 'react';

interface RowProps {
  className?: string
}

const Row: React.FC<RowProps> = (props) => {
  return (
    <div className={`row ${props.className ?? ''}`}>
      {props.children}
    </div>
  );
};

export default Row;