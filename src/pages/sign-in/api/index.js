import { $api } from "../../../shared/api/api";

export const signInApi = $api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "/auth/login/",
        method: "POST",
        body,
      }),
    }),
    getMe: build.query({
      query: () => ({
        url: "/auth/me/",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery } = signInApi;
