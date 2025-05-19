import clsx from "clsx";
import s from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { ROUTE } from "../../../../shared/api/path";

export function Header() {
  const { pathname } = useLocation();

  const isActive = (route) => pathname === route;

  return (
    <header className={s.header}>
      <div className={clsx(s.headerContent, s.container)}>
        <p className={s.logo}>
          Buy<span>Zen</span>
        </p>

        <nav className={s.navigation}>
          <Link
            className={clsx(s.navItem, isActive(ROUTE.home) && s.active)}
            to="/"
          >
            Главная
          </Link>
          <Link
            className={clsx(s.navItem, isActive(ROUTE.about) && s.active)}
            to="/about"
          >
            О нас
          </Link>
          <Link
            className={clsx(s.navItem, isActive(ROUTE.catalog) && s.active)}
            to="/catalog"
          >
            Каталог
          </Link>
        </nav>

        <Link className={s.authLink} to={ROUTE.signIn}>
          Войти
        </Link>
      </div>
    </header>
  );
}
