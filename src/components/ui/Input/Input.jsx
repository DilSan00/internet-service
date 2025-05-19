import clsx from "clsx";
import s from "./Input.module.scss";

export function Input({
  placeholder,
  type,
  validate,
  textarea,
  onChange,
  ...props
}) {
  return (
    <div className={clsx(s.container, textarea === true && s.textArea)}>
      {validate && <p className={s.error}>* {validate}</p>}

      {textarea === true ? (
        <textarea
          className={s.textarea}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      ) : (
        <input
          className={clsx(s.input, props.type === "number" && s.noArrow)}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          {...props}
        />
      )}
    </div>
  );
}
