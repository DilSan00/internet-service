import { BannerContainer } from "../../../widgets/banner-container/ui/BannerContainer";
import { ProductList } from "../../../widgets/product-list";
import { useGetProductTopsQuery } from "../api";
import s from "./Home.module.scss";

export const Home = () => {
  const { data, isLoading } = useGetProductTopsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(data)) {
    return <div>Error: Data is not available or is not an array</div>;
  }

  const sortedInternets = [...data].sort((a, b) => b.speed - a.speed);
  console.log(sortedInternets);


  return (
    <div className={s.home}>
      <BannerContainer />

      <div className={s.card}>
        <h2 className={s.title}>Tops</h2>
        <ProductList data={sortedInternets} />
      </div>
    </div>
  );
};
