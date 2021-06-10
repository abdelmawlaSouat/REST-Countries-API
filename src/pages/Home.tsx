/*
 * File: App.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 3:26:50 pm
 * Last Modified: 2021-06-10 4:28:31 pm
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
  const [filter, setFilter] = useState<string>('all');
  let allCountries = useRef<any>(null);

  function handleResearchValue(newValue: string): void {
    setResearchValue(newValue);
  }

  function handleCountriesList(newList: any): void {
    setCountriesList(newList);
  }

  function handleFilter(newFilter: string) {
    setFilter(newFilter);
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
          activeFilter={filter}
        />
        <FiltersSelects
          title="Filter by Region"
          activeFilter={{
            filter,
            handleFilter,
          }}
          filters={[
            { id: 0, value: 'Africa' },
            { id: 1, value: 'Americas' },
            { id: 2, value: 'Asia' },
            { id: 3, value: 'Europe' },
            { id: 4, value: 'Oceania' },
          ]}
          countries={{
            countriesList: allCountries.current,
            handleCountriesList,
          }}
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
