import s from "./AppButton.module.scss";
import clsx from "clsx";

export function AppButton({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={clsx(s.btn, className)}>
      {children}
    </button>
  );
}
