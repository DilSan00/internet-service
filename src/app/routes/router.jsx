import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { ROUTE } from "../../shared/api/path";
import { Redirect } from "./Redirect";
import { Layout } from "../layouts/Layout";
import { About } from "../../pages/about/ui/About";
import { FeedBack } from "../../pages/feedback";
import { Error } from "../../pages/error/ui/Error";

const Home = lazy(() => import("../../pages/home"));

export const router = createBrowserRouter([
  {
    path: ROUTE.base,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: `${ROUTE.catalog}/:id`,
        element: <div>HomePage</div>,
      },
      {
        element: <Redirect />,
        children: [
          { path: ROUTE.home, element: <Home /> },
          { path: ROUTE.about, element: <About /> },
          { path: ROUTE.catalog, element: <div>Catalog</div> },
          { path: ROUTE.feedback, element: <FeedBack /> },
        ],
      },
    ],
  },
]);
