import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../shared/api/path";
import s from "./ProductCard.module.scss";

export const ProductCard = ({ title, image, price, id }) => {
  const navigate = useNavigate();

  const clickByProduct = () => {
    navigate(`${ROUTE.catalog}/${id}`);
  };

  return (
    <div className={s.productCard}>
      <div className={s.imageContainer}>
        <img src={image} alt={title} className={s.img} />
      </div>

      <p className={s.title}>{title}</p>

      <button onClick={clickByProduct} className={s.btn}>
        {price} KGS
      </button>
    </div>
  );
};
