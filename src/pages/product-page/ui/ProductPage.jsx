import { useLocation } from "react-router-dom";
import clsx from "clsx";
import s from "./ProductPage.module.scss";

export function ProductPage() {
  const { state } = useLocation();
  const data = state?.data;

  if (!data) {
    return <p className={s.empty}>Нет данных для отображения</p>;
  }

  const isPremium =
    data.type === "Premium" || (data.type !== "Business" && data.price >= 500);
  const isBusiness =
    data.type === "Business" || (data.type !== "Premium" && data.price >= 200);
  const isBasic = data.price < 100;
  const isUnknown = !isPremium && !isBusiness && !isBasic;

  return (
    <div
      className={clsx(s.product, {
        [s.premium]: isPremium,
        [s.business]: isBusiness,
        [s.basic]: isBasic,
        [s.unknown]: isUnknown,
      })}
    >
      <div className={s.header}>
        <h1 className={s.title}>
          <span className={s.name}>{data.providerName}</span> — {data.type}
        </h1>
      </div>

      <p className={s.description}>{data.description}</p>

      <div className={s.overview}>
        <div className={s.info}>
          <span>Провайдер:</span>
          <span className={s.text}>{data.providerName}</span>
        </div>
        <div className={s.info}>
          <span>Тип:</span>
          <span className={s.text}>{data.type}</span>
        </div>
        <div className={s.info}>
          <span>Скорость:</span>
          <span className={s.text}>{data.speed} Мбит/с</span>
        </div>
        <div className={s.info}>
          <span>Задержка:</span>
          <span className={s.text}>{data.latency} мс</span>
        </div>
        <div className={s.info}>
          <span>Цена:</span>
          <span className={s.textPrice}>{data.price} $ / мес</span>
        </div>
      </div>

      <button className={s.btn}>Подать заявку</button>
    </div>
  );
}
