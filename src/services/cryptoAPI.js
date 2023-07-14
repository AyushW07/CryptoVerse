import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoAPIHeaders = {
  "X-RapidAPI-Key": "3b4600b24amshe31f6479f915ca8p104771jsnf40ca2419ec3",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoAPIHeaders });

export const cryptoAPI = createApi({
  reducerPath: "cryptoAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});

export const { useGetCryptoQuery, useGetCryptoDetailsQuery } = cryptoAPI;

// import { request } from "axios";

// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     timePeriod: "24h",
//     "tiers[0]": "1",
//     orderBy: "marketCap",
//     orderDirection: "desc",
//     limit: "50",
//     offset: "0",
//   },
//
// };

// try {
//   const response = await request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
