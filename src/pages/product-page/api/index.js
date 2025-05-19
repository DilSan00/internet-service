import { $api } from "../../../shared/api/api";

export const productApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),

    sendApplication: build.mutation({
      query: (body) => ({
        url: "/applications/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetProductQuery, useSendApplicationMutation } = productApi;
