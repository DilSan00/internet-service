import clsx from "clsx";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import s from "./ProductList.module.scss";

export function ProductList({ data, className }) {
  return (
    <div className={clsx(s.productsContainer, className)}>
      {data?.map((product, index) => (
        <ProductCard
          data={product}
          key={index}
          providerName={product.providerName}
          type={product.type}
          speed={product.speed}
          price={product.price}
        />
      ))}
    </div>
  );
}
