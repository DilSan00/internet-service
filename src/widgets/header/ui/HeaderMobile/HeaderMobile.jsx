import clsx from "clsx";
import s from "./HeaderMobile.module.scss";

export function HeaderMobile() {
  return (
    <header className={s.header}>
      <div className={clsx(s.headerContent, s.container)}>
        <p>Logo</p>

        <div className={s.burger}>
          <span className={s.line}></span>
          <span className={s.middle}></span>
          <span className={s.line}></span>
        </div>
      </div>
    </header>
  );
}
