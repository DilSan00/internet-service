import { $api } from "../../../shared/api/api";

export const applicationsApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getApplications: build.query({
      query: () => ({
        url: "/applications/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetApplicationsQuery } = applicationsApi;
