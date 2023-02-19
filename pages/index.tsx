import { useEffect, useRef, useState } from "react";

import styles from "../styles/Home.module.scss";
import SearchBar from "../components/searchBar/SearchBar";
import FiltersSelects from "../components/ui/FiltersSelects";
import CountryCard from "../components/countryCard/CountryCard";
import CountryInterface from "../types/Country";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  const [researchValue, setResearchValue] = useState<string>("");
  const [isCountriesLoaded, setIsCountriesLoaded] = useState<boolean>(false);
  const [countriesList, setCountriesList] = useState([]);
  const [filter, setFilter] = useState<string>("all");
  let allCountries = useRef<any>(null);

  function handleResearchValue(newValue: string): void {
    setResearchValue(newValue);
  }

  function handleCountriesList(newList: any): void {
    setCountriesList(newList);
  }

  function handleFilter(newFilter: string): void {
    setFilter(newFilter);
  }

  useEffect(() => {
    fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag"
    )
      .then((res) => res.json())
      .then((countriesList) => {
        allCountries.current = countriesList;
        setCountriesList(allCountries.current);
        setIsCountriesLoaded(true);
      });
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.searchBarAndFiltersContainer}>
        <SearchBar
          research={{
            placeholder: "Search a country...",
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
            { id: 0, value: "Africa" },
            { id: 1, value: "Americas" },
            { id: 2, value: "Asia" },
            { id: 3, value: "Europe" },
            { id: 4, value: "Oceania" },
          ]}
          countries={{
            countriesList: allCountries.current,
            handleCountriesList,
          }}
        />
      </div>
      <div className={styles.countriesList}>
        {isCountriesLoaded &&
          countriesList.map((country: CountryInterface) => (
            <Link
              key={country.name}
              to={`/country/${country.name.toLowerCase()}`}
            >
              <CountryCard country={country} />
            </Link>
          ))}
        {isCountriesLoaded && countriesList.length === 0 && (
          <span
            className={styles.errorMsg}
          >{`Sorry, no results were found for "${researchValue}".`}</span>
        )}
      </div>
    </div>
  );
};

export default Home;
