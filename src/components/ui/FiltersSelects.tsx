/*
 * File: FiltersSelects.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 4:50:53 pm
 * Last Modified: 2021-06-08 5:48:49 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { FC } from 'react';
import scss from './FiltersSelect.module.scss';

interface Filter {
  id: number;
  value: string;
}

interface Props {
  title: string;
  filters: Filter[];
}

// TODO : Improve Select Display

const FiltersSelects: FC<Props> = ({ children, ...props }) => {
  const { title, filters } = props;

  return (
    <div className={scss.filtersContainer}>
      <select>
        <option value="">{title}</option>
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
