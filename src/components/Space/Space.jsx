import s from "./Space.module.scss";

// eslint-disable-next-line react/prop-types
export function Space({ w = 0, h = 0 }) {
  return (
    <div
      style={{ marginRight: `${w}px`, marginBottom: `${h}px` }}
      className={s.space}
    />
  );
}
