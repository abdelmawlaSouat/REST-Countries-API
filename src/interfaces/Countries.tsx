/*
 * File: Countries.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-10 3:51:30 pm
 * Last Modified: 2021-06-10 3:52:00 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import CountryInterface from './Country';

interface Countries {
  countriesList: CountryInterface[];
  handleCountriesList(newList: CountryInterface[]): void;
}

export default Countries;
