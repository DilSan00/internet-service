import s from "./SkeletonList.module.scss";
import { Skeleton } from "../Skeleton/Skeleton";

export function SkeletonList({ size = 12 }) {
  return (
    <div className={s.skeletonList}>
      {Array.from({ length: size }).map((_, i) => (
        <Skeleton key={i} width={100} height={300} className={s.skeleton} />
      ))}
    </div>
  );
}
