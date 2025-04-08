import s from "./ProductCard.module.scss";

export const ProductCard = ({ title, type, speed, price }) => {
  return (
    <div className={s.productCard}>
      <p className={s.title}>{title} - {type}</p>

      <div>
      <p className={s.datails}>Speed: {speed} mbps</p>
      <p className={s.datails}>Price: {price}</p>
      </div>

      <button className={s.btn}>Подключить тариф</button>
    </div>
  );
};
