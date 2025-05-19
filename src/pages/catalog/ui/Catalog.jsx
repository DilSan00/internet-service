import s from "./Catalog.module.scss";
import { useGetProductsQuery } from "../api";
import { ProductList } from "../../../widgets/product-list";
import { SkeletonList } from "../../../components/ui/skeleton-components";

export function Catalog() {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <SkeletonList />;
  }

  return (
    <div className={s.catalog}>
      <ProductList data={data} />
    </div>
  );
}
