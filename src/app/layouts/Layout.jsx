import { Outlet } from "react-router-dom";
import "../../shared/styles/global.scss";
import { Space } from "../../components/ui/Space/Space";
import { useScreenWidth } from "./../../shared/hooks/useScreenWidth";
import { HeaderMobile } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";

export const Layout = () => {
  const { isMobile } = useScreenWidth();

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      <Space h={70} />

      <main className="container">
        <Outlet />
      </main>

      <Space h={70} />
      <Footer />
    </>
  );
};
