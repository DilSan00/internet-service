import { ProductCard } from "../../../components/ProductCard/ProductCard";
import s from './ProductList.module.scss'

export function ProductList({ data }) {
  return (
    <div className={s.productsContainer}>
      {data.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          type={product.type}
          speed={product.speed}
          price={product.price}
        />
      ))}
    </div>
  );
}
