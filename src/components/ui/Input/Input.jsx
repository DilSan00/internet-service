import clsx from "clsx";
import s from "./Input.module.scss";

export function Input({
  placeholder,
  type,
  textarea = false,
  value,
  onChange,
}) {
  return (
    <div className={clsx(s.container, textarea === true && s.textArea)}>
      {textarea === true ? (
        <textarea
          className={s.textarea}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={s.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
