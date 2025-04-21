import { AppButton } from "../../../components/ui/AppButton/AppButton";
import { Input } from "../../../components/ui/Input/Input";
import s from "./FeedbackForm.module.scss";

export function FeedbackForm() {
  return (
    <div className={s.form}>
      <div className={s.container}>
        <h1 className={s.title}>Вам нужна помощь?</h1>
        <p className={s.text}>
          Пожалуйста, отправьте запрос, и мы свяжемся с вами как можно скорее.
        </p>
      </div>

      <Input placeholder="Имя пользователя" type="text" />
      <Input placeholder="Адресс электронной почты" type="email" />
      <Input placeholder="Ваш текст ..." textarea={true} />

      <AppButton onClick={() => console.log("submit")} className={s.submit}>
        Отправить
      </AppButton>
    </div>
  );
}
