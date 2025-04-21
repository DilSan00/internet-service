import { $api } from "../../../shared/api/api";

export const homeProductApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProductTops: build.query({
      query: () => ({
        url: "/internets/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductTopsQuery } = homeProductApi;
