import { $api } from "../../../shared/api/api";

export const catalogApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: "/internets",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = catalogApi;
