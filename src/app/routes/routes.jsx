import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import { ROUTE } from "../../shared/api/path";
import { Layout } from "../layouts/Layout";
import { ErrorScreen } from "../../pages/error";
import { AdminLayout } from "../layouts/AdminLayout";

const Home = lazy(() => import("../../pages/home"));
const About = lazy(() => import("../../pages/about"));
const Catalog = lazy(() => import("../../pages/catalog"));
const ProductPage = lazy(() => import("../../pages/product-page"));
const SignIn = lazy(() => import("../../pages/sign-in"));
const SignUp = lazy(() => import("../../pages/sign-up"));
const CreateProduct = lazy(() => import("../../pages/create-product"));
const Applications = lazy(() => import("../../pages/applications"));

export const router = createBrowserRouter([
  {
    path: ROUTE.base,
    element: <Layout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: `${ROUTE.catalog}/:id`,
        element: <ProductPage />,
      },
      { path: ROUTE.home, element: <Home /> },
      { path: ROUTE.about, element: <About /> },
      { path: ROUTE.catalog, element: <Catalog /> },
      { path: ROUTE.signIn, element: <SignIn /> },
      { path: ROUTE.signUp, element: <SignUp /> },
    ],
  },

  {
    path: ROUTE.admin,
    element: <AdminLayout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTE.internetCreate} replace />,
      },
      {
        path: ROUTE.internetCreate,
        element: <CreateProduct />,
      },
      {
        path: ROUTE.applications,
        element: <Applications />,
      },
    ],
  },
]);
