import { createApi } from "@reduxjs/toolkit/query/react";
import { $baseQueryWithRefresh } from "./query";

export const $api = createApi({
  reducerPath: "https://internet-service-api.onrender.com",
  baseQuery: $baseQueryWithRefresh,
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});
