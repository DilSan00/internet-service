import s from "./Error.module.scss";

export function Error() {
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
