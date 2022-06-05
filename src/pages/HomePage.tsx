import React, { useState } from "react";
import Categories from "../components/Categories";
import qs from "qs";
import Books from "../components/Books";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

function HomePage() {
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
  const handleCategory = (renderCategory: any) => {
    setCategory(renderCategory.id);
    setCategoryName(renderCategory.name);
  };

  return (
    <div>
      <Link to="/bookmark" className="flex justify-end p-6">
        Go to Bookmark Page
      </Link>
      <SearchBar />
      <Categories handleCategory={handleCategory} category={category} />
      <Books pagination={pagination} categoryName={categoryName} />
      <Pagination
        pageNumber={pageNumber}
        pageSize={pageSize}
        setPageSize={setPageSize}
        setPageNumber={setPageNumber}
        category={category}
      />
    </div>
  );
}

export default HomePage;
