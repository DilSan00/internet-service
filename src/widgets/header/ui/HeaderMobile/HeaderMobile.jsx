import clsx from "clsx";
import s from "./HeaderMobile.module.scss";
import { useState } from "react";

export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
          <p>Logo</p>

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
      )}
    </section>
  );
}
