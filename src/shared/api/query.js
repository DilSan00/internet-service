import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import TokenStorageService from "../model/TokenService";

export const $baseQuery = fetchBaseQuery({
  baseUrl: "https://internet-service-api.onrender.com",
  prepareHeaders: (headers) => {
    const token = TokenStorageService.getToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
