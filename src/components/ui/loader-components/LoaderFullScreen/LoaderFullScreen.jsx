import { useEffect } from "react";

import { Loader } from "../Loader/Loader";

import s from "./LoaderFullScreen.module.scss";

export function LoaderFullScreen({ size }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={s.loaderFullScreen}>
      <Loader size={size} />
    </div>
  );
}
