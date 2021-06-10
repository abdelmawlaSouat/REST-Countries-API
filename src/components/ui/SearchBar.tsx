/*
 * File: SearchBar.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 4:49:05 pm
 * Last Modified: 2021-06-10 4:36:22 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import CountryInterface from '../../interfaces/Country';
import CountriesInterface from '../../interfaces/Countries';
import scss from './SearchBar.module.scss';

interface Research {
  placeholder: string;
  researchValue: string;
  handleResearchValue(newValue: string): any;
}

interface Props {
  research: Research;
  countries: CountriesInterface;
  activeFilter: string;
}

const SearchBar: FC<Props> = ({ children, ...props }) => {
  const { activeFilter } = props;
  const { placeholder, researchValue, handleResearchValue } = props.research;
  const { countriesList, handleCountriesList } = props.countries;

  function getMatchingResearch(research: string): CountryInterface[] {
    if (/^([a-z])*$/i.test(research) === false) return [];

    const regex = RegExp(`^${research}`, 'i');
    const newList = countriesList.filter((country) => {
      const { capital, name, region } = country;

      return (
        (activeFilter === 'all' || region === activeFilter) &&
        (regex.test(name) || regex.test(capital) || regex.test(region))
      );
    });
    return newList;
  }

  function onChangeResearch(event: any) {
    const value = event.target.value;
    const newCountriesList = getMatchingResearch(value);

    handleCountriesList(newCountriesList);
    handleResearchValue(value);
  }

  return (
    <div className={scss.searchBar}>
      <AiOutlineSearch />

      <input
        type="text"
        name="research"
        id="research"
        placeholder={placeholder}
        value={researchValue}
        onChange={(e) => onChangeResearch(e)}
      />
    </div>
  );
};

export default SearchBar;
