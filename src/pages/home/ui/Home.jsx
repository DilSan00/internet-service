import { SkeletonList } from "../../../components/ui/skeleton-components";
import { BannerContainer } from "../../../widgets/banner-container/ui/BannerContainer";
import { ProductList } from "../../../widgets/product-list";
import { useGetProductTopsQuery } from "../api";
import s from "./Home.module.scss";

export function Home() {
  const { data = [], isLoading } = useGetProductTopsQuery();

  const sortedInternets = [...data]
    .sort((a, b) => b.speed - a.speed)
    .slice(0, 4);

  return (
    <div className={s.home}>
      <BannerContainer />

      <div className={s.card}>
        <h2 className={s.title}>Tops</h2>

        {isLoading ? (
          <SkeletonList size={4} />
        ) : (
          <ProductList data={sortedInternets} />
        )}
      </div>
    </div>
  );
}
