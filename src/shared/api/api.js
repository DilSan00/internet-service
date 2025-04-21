import { createApi } from "@reduxjs/toolkit/query/react";
import { $baseQuery } from "./query";

export const $api = createApi({
  reducerPath: "https://internet-service-api.onrender.com",
  baseQuery: $baseQuery,
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});
