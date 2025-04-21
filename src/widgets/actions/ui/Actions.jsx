import s from "./Actions.module.scss";
import { AppButton } from "../../../components/ui/AppButton/AppButton";

export function Actions() {
  return (
    <div className={s.actions}>
      <img
        src="https://thumbs.dreamstime.com/b/feedback-concept-image-arrows-blue-chalkboard-background-40378284.jpg"
        alt="feedbackImg"
      />

      <div className={s.btnContainer}>
        <AppButton
          onClick={() => console.log("Вопрос задан")}
          className={s.btn}
        >
          Задать вапрос
        </AppButton>
        <AppButton onClick={() => console.log("Чат начат")} className={s.btn}>
          Начать чат
        </AppButton>
        <AppButton onClick={() => console.log("Вызван")} className={s.btn}>
          Обратная вызов
        </AppButton>
      </div>
    </div>
  );
}
