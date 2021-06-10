/*
 * File: CountryCard.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 4:51:20 pm
 * Last Modified: 2021-06-10 1:43:20 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { FC } from 'react';
import CountryInterface from '../../interfaces/Country';
import scss from './CountryCard.module.scss';

interface Props {
  country: CountryInterface;
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
