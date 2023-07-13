import { configureStore } from "@reduxjs/toolkit";
import { cryptoAPI } from "./services/cryptoAPI";
import { newsAPI } from "./services/newsAPI";

export default configureStore({
  reducer: {
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
    [newsAPI.reducerPath]: newsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoAPI.middleware, newsAPI.middleware),
});
