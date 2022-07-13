import React from 'react';
import Home from '@pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Game from '@pages/Game';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="game" element={<Game />}  />
    </Routes>
  );
}

export default App;
