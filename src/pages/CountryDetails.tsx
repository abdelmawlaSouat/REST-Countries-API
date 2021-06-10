/*
 * File: Country.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-10 8:32:21 pm
 * Last Modified: 2021-06-11 12:16:38 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { BsArrowLeft } from 'react-icons/bs';
import scss from './CountryDetails.module.scss';
import { Link } from 'react-router-dom';

export default function CountryDetails() {
  const { name }: any = useParams();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const country = useRef<any>(null);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => res.json())
      .then((countryDetail) => {
        country.current = countryDetail[0];
        setIsLoaded(true);
      });
  }, [name]);

  return (
    <div>
      {isLoaded && (
        <div>
          <Link to="/" className={scss.backBtn}>
            <button type="button">
              <BsArrowLeft />
              <span>Back</span>
            </button>
          </Link>

          <main>
            <img
              src={country.current.flag}
              alt={`Flaf of ${country.current.name}`}
            />
            <section>
              <h2 className={scss.countryName}>{country.current.name}</h2>
              <div className={scss.content}>
                <div className={scss.sectionOne}>
                  <p>
                    <span className={scss.title}>Native Name: </span>
                    <span>{country.current.nativeName}</span>
                  </p>
                  <p>
                    <span className={scss.title}>Population: </span>
                    <span>{country.current.population}</span>
                  </p>
                  <p>
                    <span className={scss.title}>Region: </span>
                    <span>{country.current.region}</span>
                  </p>
                  <p>
                    <span className={scss.title}>Sub region: </span>
                    <span>{country.current.subregion}</span>
                  </p>
                  <p>
                    <span className={scss.title}>Capital: </span>
                    <span>{country.current.capital}</span>
                  </p>
                </div>

                <div className={scss.sectionTwo}>
                  <p>
                    <span className={scss.title}>Top Level Domain: </span>
                    <span>{country.current.topLevelDomain[0]}</span>
                  </p>
                  <p>
                    <span className={scss.title}>Currencies: </span>
                    <span>{country.current.currencies[0].name}</span>
                  </p>
                  <p>
                    <span className={scss.title}>Timezone: </span>
                    <span>{country.current.timezones[0]}</span>
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      )}
    </div>
  );
}
