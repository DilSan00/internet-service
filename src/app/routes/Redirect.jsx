import { Outlet } from "react-router-dom";
import TokenService from "../../shared/model/TokenService";
// import { Navigate } from "react-router-dom";

export function Redirect() {
  const access = TokenService.getToken();
  if (!access) {
    // return <Navigate to={'/'} />;
  }

  return <Outlet />;
}
