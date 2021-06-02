/*
 * File: Header.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 4:48:17 pm
 * Last Modified: 2021-06-02 5:01:39 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import scss from './Header.module.scss';
import ThemeSwitcher from './ui/ThemeSwitcher';

export default function Header() {
  return (
    <header className={scss.header}>
      <h1>Where in the world ?</h1>
      <ThemeSwitcher />
    </header>
  );
}
