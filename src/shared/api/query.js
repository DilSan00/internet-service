import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import TokenStorageService from "../model/TokenService";

export const $baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000",
  prepareHeaders: (headers) => {
    const token = TokenStorageService.getToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
