import { useEffect, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { BiSun } from "react-icons/bi";
import styles from "./ThemeSwitcher.module.scss";

export default function ThemeSwitcher() {
  const [iconType, setIconType] = useState(<BiSun />);
  const [themeMode, setThemeMode] = useState("Light Mode");

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      const themeType = "light";

      localStorage.setItem("theme", themeType);
      document.documentElement.className = themeType;
    } else {
      document.documentElement.className = localStorage.getItem(
        "theme"
      ) as string;
      setStates(localStorage.getItem("theme") as string);
    }
  }, []);

  const setStates = (theme: string) => {
    if (theme === "dark") {
      setIconType(<FiMoon />);
      setThemeMode("Dark Mode");
    } else {
      setIconType(<BiSun />);
      setThemeMode("Light Mode");
    }
  };

  const toggleTheme = () => {
    const newTheme =
      localStorage.getItem("theme") === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
    setStates(newTheme);
  };

  return (
    <div className={styles.container} onClick={toggleTheme}>
      {iconType}

      <span>{themeMode}</span>
    </div>
  );
}
