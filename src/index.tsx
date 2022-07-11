import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import 'tailwindcss/tailwind.css';
import 'simplebar/dist/simplebar.min.css';
import '@styles/global.css'
import '@styles/custom.scss'
import '@styles/main.scss'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

