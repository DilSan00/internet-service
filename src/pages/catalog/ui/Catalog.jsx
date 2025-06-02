import { FiPackage } from "react-icons/fi";
import s from "./Catalog.module.scss";
import { useGetProductsQuery } from "../api";
import { ProductList } from "../../../widgets/product-list";
import { SkeletonList } from "../../../components/ui/skeleton-components";

export function Catalog() {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <SkeletonList />;
  }

  if (!data || data.length === 0) {
    return (
      <div className={s.empty}>
        <FiPackage size={40} color="#ccc" />
        <p>Каталог пуст</p>
      </div>
    );
  }

  return (
    <div className={s.catalog}>
      <ProductList data={data} />
    </div>
  );
}
