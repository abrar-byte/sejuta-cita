import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { bookModel } from "../models/bookModel";
import { categoryModel } from "../models/categoryModel";
export interface CategoriesResponse {
  error?: string;
  success: boolean;
  categories?: categoryModel;
  length?:any;
  map?:any
}

export interface BooksResponse {
  error?: string;
  success: boolean;
  books?: bookModel;
  length?:any;
  map?:any
}
export const corsDisable="https://cors-anywhere.herokuapp.com/"
export const baseUrl = `https://asia-southeast2-sejutacita-app.cloudfunctions.net`
export const sejutaCitaApi = createApi({
  reducerPath: "sejutaCitaApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesResponse, string | void>({
      query: () => `/fee-assessment-categories`,
    }),
    getBooksByCategory:builder.query<BooksResponse, string | void>({
      query: (payload) => `/fee-assessment-books${payload}`,
    }),
    getAllBooks:builder.query<BooksResponse, number | void>({
      query: (categoryId) => `/fee-assessment-books?categoryId=${categoryId}`,
    }) 
  }),
});
export const {
  useGetCategoriesQuery,
  useGetBooksByCategoryQuery,
  useGetAllBooksQuery
 
} = sejutaCitaApi;

