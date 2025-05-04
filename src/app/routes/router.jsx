import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { ROUTE } from "../../shared/api/path";
import { Layout } from "../layouts/Layout";
import { Error } from "../../pages/error/ui/Error";

const Home = lazy(() => import("../../pages/home"));
const About = lazy(() => import("../../pages/about"));
const FeedBack = lazy(() => import("../../pages/feedback"));
const Catalog = lazy(() => import("../../pages/catalog"));
const ProductPage = lazy(() => import("../../pages/product-page"))
const SignIn = lazy(() => import("../../pages/sign-in"));
const SignUp = lazy(() => import("../../pages/sign-up"));

export const router = createBrowserRouter([
  {
    path: ROUTE.base,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: `${ROUTE.catalog}/:id`,
        element: <ProductPage />,
      },

      { path: ROUTE.home, element: <Home /> },
      { path: ROUTE.about, element: <About /> },
      { path: ROUTE.catalog, element: <Catalog /> },
      { path: ROUTE.feedback, element: <FeedBack /> },
      { path: ROUTE.signIn, element: <SignIn /> },
      { path: ROUTE.signUp, element: <SignUp /> },
    ],
  },
]);
