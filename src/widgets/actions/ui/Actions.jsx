import s from "./Actions.module.scss";
import { AppButton } from "../../../shared/ui/AppButton/AppButton";

export function Actions() {
  return (
    <div className={s.actions}>
      <img
        src="https://thumbs.dreamstime.com/b/feedback-concept-image-arrows-blue-chalkboard-background-40378284.jpg"
        alt="feedbackImg"
      />

      <div className={s.btnContainer}>
        <AppButton
          title="Задать вапрос"
          onClick={() => console.log("Вопрос задан")}
          className={s.btn}
        />
        <AppButton
          title="Начать чат"
          onClick={() => console.log("Чат начат")}
          className={s.btn}
        />
        <AppButton
          title="Обратная вызов"
          onClick={() => console.log("Вызван")}
          className={s.btn}
        />
      </div>
    </div>
  );
}
