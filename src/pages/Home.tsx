/*
 * File: App.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 3:26:50 pm
 * Last Modified: 2021-06-07 7:16:43 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import React from 'react';
import scss from './Home.module.scss';
import Header from '../components/Header';
import SearchBar from '../components/ui/SearchBar';

function App() {
  return (
    <div className={scss.app}>
      <Header />
      <div className={scss.searchBarAndFiltersContainer}>
        <SearchBar placeholder="Search a country..." />
      </div>
    </div>
  );
}

export default App;
