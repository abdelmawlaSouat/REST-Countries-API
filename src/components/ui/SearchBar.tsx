/*
 * File: SearchBar.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 4:49:05 pm
 * Last Modified: 2021-06-08 4:39:07 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import scss from './SearchBar.module.scss';

interface Props {
  placeholder: string;
  researchValue: string;
  handleResearchValue(newValue: string): any;
}

const SearchBar: FC<Props> = ({ children, ...props }) => {
  const { placeholder, researchValue, handleResearchValue } = props;

  return (
    <div className={scss.searchBar}>
      <AiOutlineSearch />

      <input
        type="text"
        name="research"
        id="research"
        placeholder={placeholder}
        value={researchValue}
        onChange={(e) => {
          handleResearchValue(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
