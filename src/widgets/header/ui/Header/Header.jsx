import clsx from "clsx";
import s from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { ROUTE } from "../../../../shared/api/path";
import TokenService from "../../../../shared/model/TokenService";
import { useGetMeQuery } from "../../../../pages/sign-in/api";

export function Header() {
  const { pathname } = useLocation();
  const isToken = TokenService.getToken();
  const { data: userData } = useGetMeQuery(undefined, {
    skip: !isToken,
  });

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
          {userData?.role === "admin" && (
            <Link className={s.navItem} to={ROUTE.admin}>
              Админ панель
            </Link>
          )}
        </nav>

        <div className={s.authLinks}>
          {!isToken ? (
            <Link className={s.authLink} to={ROUTE.signIn}>
              Войти
            </Link>
          ) : (
            <Link className={s.authLink} to={ROUTE.cart}>
              Корзина
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
