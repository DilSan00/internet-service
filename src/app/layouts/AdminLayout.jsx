import { Outlet, Navigate } from "react-router-dom";
import s from "./AdminLayout.module.scss";
import { AdminPanel } from "../../widgets/admin-panel";
import { useGetMeQuery } from "../../pages/sign-in/api/index";
import { ROUTE } from "../../shared/api/path";
import { LoaderFullScreen } from "../../components/ui/loader-components";

export function AdminLayout() {
  const { data, isLoading, isError } = useGetMeQuery();

  if (isLoading) {
    return <LoaderFullScreen size={50} />;
  }

  if (isError || !data) {
    return <Navigate to={ROUTE.signIn} replace />;
  }

  if (data.role !== "admin") {
    return <Navigate to={ROUTE.signIn} replace />;
  }

  return (
    <div className={s.admin}>
      <aside className={s.sideBar}>
        <AdminPanel />
      </aside>

      <div className={s.adminContent}>
        <Outlet />
      </div>
    </div>
  );
}
