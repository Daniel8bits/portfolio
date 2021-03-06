import React from 'react';
import Home from '@pages/home/Home';
import Game from '@pages/game/Game';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="game" element={<Game />}  />
    </Routes>
  );
}

export default App;
