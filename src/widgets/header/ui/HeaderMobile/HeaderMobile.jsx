import clsx from "clsx";
import s from "./HeaderMobile.module.scss";
import { useState } from "react";
import { ROUTE } from "../../../../shared/api/path";
import { Link, useLocation } from "react-router-dom";
import TokenService from "../../../../shared/model/TokenService";
import { useGetMeQuery } from "../../../../pages/sign-in/api";

export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { pathname } = useLocation();
  const isToken = TokenService.getToken();
  const { data: userData } = useGetMeQuery(undefined, {
    skip: !isToken,
  });

  const isActive = (route) => pathname === route;

  const handleToggle = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 270);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <section className={s.headerContainer}>
      <header className={s.header}>
        <div className={clsx(s.headerContent, s.container)}>
          <p className={s.logo}>
            Buy<span>Zen</span>
          </p>

          <div
            onClick={handleToggle}
            className={clsx(
              s.burger,
              isOpen && s.burgerActive,
              isClosing && s.burgerClose
            )}
          >
            <span className={s.line}></span>
            <span className={s.middle}></span>
            <span className={s.line}></span>
          </div>
        </div>
      </header>

      {(isOpen || isClosing) && (
        <div className={clsx(s.menu, isClosing && s.menuClose)}>
          <nav className={s.navigation}>
            <Link
              className={clsx(s.navItem, isActive(ROUTE.home) && s.active)}
              to={ROUTE.home}
            >
              Главная
            </Link>
            <Link
              className={clsx(s.navItem, isActive(ROUTE.about) && s.active)}
              to={ROUTE.about}
            >
              О нас
            </Link>
            <Link
              className={clsx(s.navItem, isActive(ROUTE.catalog) && s.active)}
              to={ROUTE.catalog}
            >
              Каталог
            </Link>
            {userData?.role === "admin" && (
              <Link className={s.navItem} to={ROUTE.admin}>
                Админ панель
              </Link>
            )}
            {!isToken ? (
              <Link className={s.authLink} to={ROUTE.signIn}>
                Войти
              </Link>
            ) : (
              <Link className={s.authLink} to={ROUTE.cart}>
                Корзина
              </Link>
            )}
          </nav>
        </div>
      )}
    </section>
  );
}
