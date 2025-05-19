import s from "./ErrorScreen.module.scss";

export function ErrorScreen() {
  return (
    <div className={s.error}>
      <h1 className={s.errorNumber}>404</h1>
      <p className={s.title}>Страница не найдена</p>
      <p className={s.text}>
        К сожалению, неправильно набран адрес, или такой страницы на сайте
        больше не существует
      </p>
    </div>
  );
}
