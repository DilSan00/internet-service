import clsx from "clsx";
import s from "./Input.module.scss";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { useState } from "react";

export function Input({
  placeholder,
  type = "text",
  validate,
  textarea,
  onChange,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleEyeClick = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className={clsx(s.container, textarea && s.textArea)}>
      {validate && <p className={s.error}>* {validate}</p>}

      <div className={s.content}>
        {textarea ? (
          <textarea
            className={s.textarea}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
          />
        ) : (
          <input
            className={clsx(s.input, type === "number" && s.noArrow)}
            placeholder={placeholder}
            onChange={onChange}
            type={inputType}
            {...props}
          />
        )}

        {type === "password" && (
          <div className={s.eye} onClick={handleEyeClick}>
            {showPassword ? (
              <IoEyeSharp size={30} />
            ) : (
              <IoEyeOffSharp size={30} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
