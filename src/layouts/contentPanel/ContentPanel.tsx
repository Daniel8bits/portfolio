import React from 'react';

interface ContentPanelProps {
  
}

const ContentPanel: React.FC<ContentPanelProps> = (props) => {
  return (
    <main className='content-panel'>
      {props.children}
    </main>
  );
};

export default ContentPanel;