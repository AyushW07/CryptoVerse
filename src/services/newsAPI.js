import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsAPIHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "3b4600b24amshe31f6479f915ca8p104771jsnf40ca2419ec3",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: newsAPIHeaders });

export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = newsAPI;
