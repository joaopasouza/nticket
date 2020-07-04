import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/main.css';
import './styles/_all-skins.css';
import './styles/custom.css';

import App from './App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
