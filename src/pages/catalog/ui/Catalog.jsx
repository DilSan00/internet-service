import s from "./Catalog.module.scss";
import { useGetProductsQuery } from "../api";
import { ProductList } from "../../../widgets/product-list/ui/productList";

export function Catalog() {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Data is not available or is not an array</div>;

  return (
    <div className={s.catalog}>
      <ProductList data={data} className={s.filterList} />
    </div>
  );
}
