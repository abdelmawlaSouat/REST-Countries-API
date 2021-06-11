/*
 * File: FiltersSelects.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 4:50:53 pm
 * Last Modified: 2021-06-11 1:16:24 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { FC } from 'react';
import scss from './FiltersSelect.module.scss';
import CountriesInterface from '../../interfaces/Countries';

interface Filter {
  id: number;
  value: string;
}

interface ActiveFilter {
  filter: string;
  handleFilter(newFilter: string): void;
}

interface Props {
  title: string;
  filters: Filter[];
  activeFilter: ActiveFilter;
  countries: CountriesInterface;
}

// TODO : Improve Select Display

const FiltersSelects: FC<Props> = ({ children, ...props }) => {
  const { title, filters } = props;
  const { countriesList, handleCountriesList } = props.countries;
  const { filter, handleFilter } = props.activeFilter;

  function onChangeSelect(newFilter: any) {
    console.log(newFilter);

    handleCountriesList(
      countriesList.filter(
        (country) => newFilter === 'all' || country.region === newFilter
      )
    );
    handleFilter(newFilter);
  }

  return (
    <div className={scss.filtersContainer}>
      <select
        onChange={(event) => onChangeSelect(event.target.value)}
        value={filter}
      >
        <option value="all">{title}</option>
        {filters.map((filter) => (
          <option key={filter.id} value={filter.value}>
            {filter.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FiltersSelects;
