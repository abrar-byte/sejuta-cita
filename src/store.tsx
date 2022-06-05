import {  configureStore } from "@reduxjs/toolkit";
import { sejutaCitaApi } from "./features/sejutaCitaApi";
import storage from "redux-persist/lib/storage";
import {
 
  persistReducer,

} from "redux-persist";
import searchSliceReducer from "./features/searchSlice";
import bookmarkSliceReducer from "./features/bookmarkSlice";




const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, bookmarkSliceReducer);
export const store = configureStore({
  reducer: {
    bookmark:persistedReducer,
    searchBar: searchSliceReducer,    
    [sejutaCitaApi.reducerPath]: sejutaCitaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(sejutaCitaApi.middleware),
 
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;