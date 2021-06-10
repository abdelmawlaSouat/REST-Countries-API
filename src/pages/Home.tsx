/*
 * File: App.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 3:26:50 pm
 * Last Modified: 2021-06-10 2:43:44 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useEffect, useRef, useState } from 'react';

import scss from './Home.module.scss';
import Header from '../components/Header';
import SearchBar from '../components/ui/SearchBar';
import FiltersSelects from '../components/ui/FiltersSelects';
import CountryCard from '../components/ui/CountryCard';
import CountryInterface from '../interfaces/Country';

function Home() {
  const [researchValue, setResearchValue] = useState<string>('');
  const [isCountriesLoaded, setIsCountriesLoaded] = useState<boolean>(false);
  const [countriesList, setCountriesList] = useState([]);
  let allCountries = useRef<any>(null);

  function handleResearchValue(newValue: string): void {
    // if (newValue.length === 0) setCountriesList(allCountries.current);
    setResearchValue(newValue);
  }

  function handleCountriesList(newList: any): void {
    setCountriesList(newList);
  }

  useEffect(() => {
    fetch(
      'https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag'
    )
      .then((res) => res.json())
      .then((countriesList) => {
        allCountries.current = countriesList;
        setCountriesList(allCountries.current);
        setIsCountriesLoaded(true);
      });
  }, []);

  return (
    <div className={scss.home}>
      <Header />
      <div className={scss.searchBarAndFiltersContainer}>
        <SearchBar
          research={{
            placeholder: 'Search a country...',
            handleResearchValue,
            researchValue,
          }}
          countries={{
            countriesList: allCountries.current,
            handleCountriesList,
          }}
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
          countriesList.map((country: CountryInterface) => (
            <CountryCard key={country.name} country={country} />
          ))}
      </div>
    </div>
  );
}

export default Home;
