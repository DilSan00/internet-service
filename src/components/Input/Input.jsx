import clsx from "clsx";
import s from "./Input.module.scss";

export const Input = ({ title, type, textarea = false }) => {
  return (
    <div className={clsx(s.input, textarea === true && s.textArea)}>
      <p className={s.title}>{title}</p>

      {textarea === true ? <textarea /> : <input type={type} />}
    </div>
  );
};
