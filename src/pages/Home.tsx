/*
 * File: App.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 3:26:50 pm
 * Last Modified: 2021-06-08 4:37:58 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useState } from 'react';

import scss from './Home.module.scss';
import Header from '../components/Header';
import SearchBar from '../components/ui/SearchBar';

function Home() {
  const [researchValue, setResearchValue] = useState<string>('');

  function handleResearchValue(newValue: string): any {
    setResearchValue(newValue);
  }

  return (
    <div className={scss.home}>
      <Header />
      <div className={scss.searchBarAndFiltersContainer}>
        <SearchBar
          handleResearchValue={handleResearchValue}
          researchValue={researchValue}
          placeholder="Search a country..."
        />
      </div>
    </div>
  );
}

export default Home;
