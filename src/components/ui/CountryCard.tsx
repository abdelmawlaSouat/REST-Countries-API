/*
 * File: CountryCard.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 4:51:20 pm
 * Last Modified: 2021-06-08 7:23:26 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { FC } from 'react';
import scss from './CountryCard.module.scss';

interface Country {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

interface Props {
  country: Country;
}

const CountryCard: FC<Props> = ({ children, ...props }) => {
  const { country } = props;
  return (
    <div className={scss.card}>
      <img src={country.flag} alt={`Flag of ${country.name}`} />
      <div className={scss.content}>
        <span className={scss.title}>{country.name}</span>
        <p>
          <span className={scss.bolder}>Population: </span>
          <span className="population">
            {new Intl.NumberFormat('en-IN', {
              maximumSignificantDigits: 3,
            }).format(country.population)}
          </span>
        </p>
        <p>
          <span className={scss.bolder}>Region: </span>
          <span className="region">{country.region}</span>
        </p>
        <p>
          <span className={scss.bolder}>Capital: </span>
          <span className="capital">{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
