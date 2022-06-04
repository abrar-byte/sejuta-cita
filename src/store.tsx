import {  configureStore } from "@reduxjs/toolkit";

import { sejutaCitaApi } from "./features/categories/sejutaCitaApi";



export const store = configureStore({
  reducer: {
  
    [sejutaCitaApi.reducerPath]: sejutaCitaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(sejutaCitaApi.middleware),
 
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;