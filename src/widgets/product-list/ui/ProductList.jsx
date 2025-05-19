import { ProductCard } from "../../../components/ProductCard/ProductCard";
import s from "./ProductList.module.scss";

export function ProductList({ data }) {
  return (
    <div className={s.productsContainer}>
      {data?.map((product) => (
        <ProductCard
          key={product._id}
          id={product._id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}
