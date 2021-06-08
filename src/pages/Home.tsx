/*
 * File: App.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 3:26:50 pm
 * Last Modified: 2021-06-08 6:33:25 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useEffect, useState } from 'react';

import scss from './Home.module.scss';
import Header from '../components/Header';
import SearchBar from '../components/ui/SearchBar';
import FiltersSelects from '../components/ui/FiltersSelects';
import CountryCard from '../components/ui/CountryCard';

interface Country {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

function Home() {
  const [researchValue, setResearchValue] = useState<string>('');
  const [isCountriesLoaded, setIsCountriesLoaded] = useState<boolean>(false);
  const [countriesList, setCountriesList] = useState<any>([]);

  function handleResearchValue(newValue: string): any {
    setResearchValue(newValue);
  }

  useEffect(() => {
    fetch(
      'https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag'
    )
      .then((res) => res.json())
      .then((countriesList) => {
        console.log(countriesList.length);
        setCountriesList(countriesList);
        setIsCountriesLoaded(true);
      });
  }, []);

  return (
    <div className={scss.home}>
      <Header />
      <div className={scss.searchBarAndFiltersContainer}>
        <SearchBar
          handleResearchValue={handleResearchValue}
          researchValue={researchValue}
          placeholder="Search a country..."
        />
        <FiltersSelects
          title="Filter by Region"
          filters={[
            { id: 0, value: 'Africa' },
            { id: 1, value: 'America' },
            { id: 2, value: 'Asia' },
            { id: 3, value: 'Europe' },
            { id: 4, value: 'Oceania' },
          ]}
        />
      </div>
      <div className={scss.countriesList}>
        {isCountriesLoaded &&
          countriesList.map((country: Country) => (
            <CountryCard key={country.name} country={country} />
          ))}
      </div>
    </div>
  );
}

export default Home;
