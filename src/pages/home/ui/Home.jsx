import { BannerContainer } from "../../../widgets/banner-container/ui/BannerContainer";
import s from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={s.home}>
      <BannerContainer />
    </div>
  );
};
