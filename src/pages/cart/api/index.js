import { $api } from "../../../shared/api/api";

export const cartApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getCart: build.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: ["Cart"],
    }),
    createApplication: build.mutation({
      query: (body) => ({
        url: "/applications",
        method: "POST",
        body,
      }),
    }),
    clearCart: build.mutation({
      query: () => ({
        url: "/cart/clear",
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useCreateApplicationMutation,
  useClearCartMutation,
} = cartApi;
