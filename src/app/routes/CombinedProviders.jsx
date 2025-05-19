import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Provider } from "react-redux";
import { store } from "./../store/store";
import { Suspense } from "react";

export function CombinedProviders() {
  return (
    <>
      <Provider store={store}>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </>
  );
}
