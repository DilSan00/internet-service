import clsx from "clsx";
import s from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={clsx(s.footerContent, s.container)}>
        <div className={s.block}>
          <p>+996707123456</p>
          <p>+996700999888</p>
          <p>+996703000111</p>
        </div>

        <p className={s.logo}>
          Buy<span>Zen</span>
        </p>

        <div className={s.block}>
          <p>example1@gmail.com</p>
          <p>example2@gmail.com</p>
          <p>example3@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
