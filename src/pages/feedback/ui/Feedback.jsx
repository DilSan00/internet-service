import { Actions } from "../../../widgets/actions";
import { FeedbackForm } from "../../../widgets/feedback-form";
import s from "./Feedback.module.scss";

export function FeedBack() {
  return (
    <div className={s.feedBack}>
      <Actions />
      <FeedbackForm />
    </div>
  );
}
