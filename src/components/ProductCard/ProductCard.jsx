import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../shared/api/path";
import s from "./ProductCard.module.scss";

export const ProductCard = ({ data, providerName, type, speed, price }) => {
  const navigate = useNavigate();

  const clickByProduct = () => {
    navigate(`${ROUTE.catalog}/${data._id}`, { state: { data } });
    console.log(data);
  };

  return (
    <div className={s.productCard}>
      <p className={s.title}>
        {providerName} - {type}
      </p>

      <div>
        <p className={s.details}>Speed: {speed} mbps</p>
        <p className={s.details}>Price: {price}</p>
      </div>

      <button onClick={clickByProduct} className={s.btn}>
        Подключить тариф
      </button>
    </div>
  );
};
