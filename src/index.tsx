/*
 * File: index.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 3:26:50 pm
 * Last Modified: 2021-06-07 7:49:40 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/main.scss';
import 'normalize.css';
import App from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
