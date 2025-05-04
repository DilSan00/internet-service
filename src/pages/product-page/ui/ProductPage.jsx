import { useLocation } from "react-router-dom";
import s from "./ProductPage.module.scss";

export function ProductPage() {
  const { state } = useLocation();
  const data = state?.data;

  if (!data) {
    return <p>Нет данных для отображения</p>;
  }

  return (
    <div className={s.product}>
      <h1 className={s.title}>
        {data.providerName} - {data.type}
      </h1>
      <p className={s.description}>{data.description}</p>

      <div className={s.overview}>
        <p className={s.info}>
          Provider: <span className={s.text}>{data.providerName}</span>
        </p>
        <p className={s.info}>
          Type: <span className={s.text}>{data.type}</span>
        </p>
        <p className={s.info}>
          Speed: <span className={s.text}>{data.speed} mbps</span>
        </p>
        <p className={s.info}>
          Latency: <span className={s.text}>{data.latency} ms</span>
        </p>
        <p className={s.info}>
          Price: <span className={s.textPrice}>{data.price} $ / месяц</span>
        </p>
      </div>

      <button className={s.btn}>Подать заявку</button>
    </div>
  );
}
