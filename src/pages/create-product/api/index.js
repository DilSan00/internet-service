import { $api } from "../../../shared/api/api";

export const createInternetApi = $api.injectEndpoints({
  endpoints: (build) => ({
    addInternet: build.mutation({
      query: (body) => ({
        url: "/products/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddInternetMutation } = createInternetApi;
