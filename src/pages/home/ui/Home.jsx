import { BannerContainer } from "../../../widgets/banner-container/ui/BannerContainer";
import { ProductList } from "../../../widgets/product-list";
import { dataNet } from "../api";
import s from "./Home.module.scss";

export const Home = () => {
  const speedList = dataNet.sort((a, b) => b.speed - a.speed);

  return (
    <div className={s.home}>
      <BannerContainer />

      <div className={s.card}>
        <h2 className={s.title}>Tops</h2>
        <ProductList data={speedList.slice(0, 4)} />
      </div>
    </div>
  );
};
