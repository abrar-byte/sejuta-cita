import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  useGetAllBooksQuery,
  useGetBooksByCategoryQuery,
  useGetCategoriesQuery,
} from "./features/categories/sejutaCitaApi";
import Categories from "./components/Categories";
import qs from "qs";
import Books from "./components/Books";
import { categoryModel } from "./models/categoryModel";
import Pagination from "./components/Pagination";

function App() {
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);
  const [category, setCategory] = useState(1);
  const [categoryName, setCategoryName] = useState("Happiness & Mindfulness");

  const pagination = qs.stringify(
    {
      categoryId: category,
      page: pageNumber,
      size: pageSize,
    },
    { addQueryPrefix: true }
  );
  const handleCategory = (renderCategory:any)=>{
setCategory(renderCategory.id)
setCategoryName(renderCategory.name)
  }
const{data:allBook}=useGetAllBooksQuery(category)

// halaman terakhir
console.log(allBook && Math.ceil(allBook.length/pageSize));

  return (
    <div>
      <Categories handleCategory={handleCategory}  category={category}/>
      <Books pagination={pagination} categoryName={categoryName}/>
      <Pagination pageNumber={pageNumber} pageSize={pageSize} setPageSize={setPageSize} setPageNumber={setPageNumber} category={category} />
    </div>
  );
}

export default App;
