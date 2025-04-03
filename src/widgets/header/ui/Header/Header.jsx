import clsx from "clsx";
import s from "./Header.module.scss";

export function Header() {
  return (
    <header className={s.header}>
      <div className={clsx(s.headerContent, s.container)}>
        <p>Logo</p>

        <nav className={s.navigation}>
          <a className={s.navItem} href="/">
            Главная
          </a>
          <a className={s.navItem} href="/about">
            О нас
          </a>
          <a className={s.navItem} href="/catalog">
            Каталог
          </a>
          <a className={s.navItem} href="/feedback">
            Обратная связь
          </a>
        </nav>
      </div>
    </header>
  );
}
