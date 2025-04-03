import { Outlet } from "react-router-dom";
import "../../shared/styles/global.scss";
import { Space } from "../../components/Space/Space";
import { useScreenWidth } from "./../../shared/hooks/useScreenWidth";
import { HeaderMobile } from "../../widgets/header/ui/HeaderMobile/HeaderMobile";
import { Header } from "../../widgets/header/ui/Header/Header";

export const Layout = () => {
  const { isMobile } = useScreenWidth();

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      <Space h={70} />

      <main className="container">
        <Outlet />
      </main>

      <footer>footer</footer>
    </>
  );
};
