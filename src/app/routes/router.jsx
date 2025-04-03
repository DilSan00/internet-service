import { createBrowserRouter } from "react-router-dom";
import { ROUTE } from "../../shared/api/path";
import { Layout } from "../layouts/Layout";
import { lazy } from "react";
import { Redirect } from "./Redirect";

const Home = lazy(() => import("../../pages/home"));

export const router = createBrowserRouter([
  {
    path: ROUTE.base,
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: `${ROUTE.catalog}/:id`,
        element: <div>HomePage</div>,
      },
      {
        element: <Redirect />,
        children: [
          { path: ROUTE.home, element: <Home /> },
          { path: ROUTE.about, element: <div>About</div> },
          { path: ROUTE.catalog, element: <div>Catalog</div> },
          { path: ROUTE.feedback, element: <div>Feedback</div> },
        ],
      },
    ],
  },
]);
