import { AppButton } from "../../../shared/ui/AppButton/AppButton";
import { Input } from "../../../components/Input/Input";
import s from "./FeedbackForm.module.scss";

export function FeedbackForm() {
  return (
    <div className={s.form}>
      <h1 className={s.title}>Do you need any help?</h1>
      <p className={s.text}>
        Please, submit your request and we’ll get back to you as soon as
        possible.
      </p>

      <div className={s.inputList}>
        <Input title="Name:" type="text" />
        <Input title="Email:" type="email" />
        <Input title="Description:" textarea={true} />
      </div>

      <AppButton
        title="Submit"
        onClick={() => console.log("submit")}
        className={s.submit}
      />
    </div>
  );
}
