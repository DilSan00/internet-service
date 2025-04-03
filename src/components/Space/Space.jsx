import s from "./Space.module.scss";

export function Space({ w = 0, h = 0 }) {
  return (
    <div
      style={{ marginRight: `${w}px`, marginBottom: `${h}px` }}
      className={s.space}
    />
  );
}
