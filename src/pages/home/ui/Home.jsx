import { BannerContainer } from "../../../widgets/banner-container/ui/BannerContainer";
import s from "./Home.module.scss";

export const Home = () => {
  console.log("Hello World ;)");

  return (
    <div className={s.home}>
      <BannerContainer />
    </div>
  );
};
