import scss from "./Header.module.scss";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

export default function Header() {
  return (
    <header className={scss.header}>
      <h1>Where in the world ?</h1>

      <ThemeSwitcher />
    </header>
  );
}
