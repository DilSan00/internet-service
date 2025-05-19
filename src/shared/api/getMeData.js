import { $api } from "./api";

export const getMeDataApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query({
      query: () => ({
        url: "/auth/me/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMeQuery } = getMeDataApi;
