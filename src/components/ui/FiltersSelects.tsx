/*
 * File: FiltersSelects.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 4:50:53 pm
 * Last Modified: 2021-06-08 4:51:44 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { FC } from 'react';
import scss from './FiltersSelect.module.scss';

interface Props {
  title: string;
  filters: string[];
}

const FiltersSelects: FC<Props> = ({ children, ...props }) => {
  const { title, filters } = props;

  return (
    <div className={scss.filtersContainer}>
      <select>
        <option value="">{title}</option>
        {filters.map((filter) => (
          <option value={filter}>{filter}</option>
        ))}
      </select>
    </div>
  );
};

export default FiltersSelects;
