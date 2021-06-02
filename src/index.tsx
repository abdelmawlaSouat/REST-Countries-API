/*
 * File: index.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 3:26:50 pm
 * Last Modified: 2021-06-02 4:46:47 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import App from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
