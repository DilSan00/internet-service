import { $api } from "../../../shared/api/api";

export const productApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),

    addToCart: build.mutation({
      query: (body) => ({
        url: "/cart/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const { useGetProductQuery, useAddToCartMutation } = productApi;
