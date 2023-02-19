/*
 * File: ThemeSwitcher.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-02 5:00:10 pm
 * Last Modified: 2021-06-11 12:43:23 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useEffect, useState } from 'react';
import { FiMoon } from 'react-icons/fi';
import { BiSun } from 'react-icons/bi';
import scss from './ThemeSwitcher.module.scss';

export default function ThemeSwitcher() {
  const [iconType, setIconType] = useState<JSX.Element | null>(<BiSun />);
  const [themeMode, setThemeMode] = useState<string | null>('Light Mode');

  useEffect((): void => {
    if (!localStorage.getItem('theme')) {
      const themeType = 'light';

      localStorage.setItem('theme', themeType);
      document.documentElement.className = themeType;
    } else {
      document.documentElement.className = localStorage.getItem('theme')!;
      setStates(localStorage.getItem('theme')!);
    }
  }, []);

  function setStates(theme: string): void {
    if (theme === 'dark') {
      setIconType(<FiMoon />);
      setThemeMode('Dark Mode');
    } else {
      setIconType(<BiSun />);
      setThemeMode('Light Mode');
    }
  }

  function toggleTheme(): void {
    const newTheme =
      localStorage.getItem('theme') === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
    setStates(newTheme);
  }

  return (
    <div className={scss.container} onClick={toggleTheme}>
      {iconType}
      <span>{themeMode}</span>
    </div>
  );
}
