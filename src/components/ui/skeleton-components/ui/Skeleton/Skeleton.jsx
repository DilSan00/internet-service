import clsx from "clsx";

import s from "./Skeleton.module.scss";

export function Skeleton({ width = 20, height = 20, className }) {
  return (
    <div
      className={clsx(s.skeleton, className)}
      style={{ height: `${height}px`, width: `${width}%` }}
    ></div>
  );
}
