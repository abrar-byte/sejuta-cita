import React from "react";
import { useGetCategoriesQuery } from "../features/sejutaCitaApi";

interface CategoriesProps {
  handleCategory: any;
  category: number;
}

export default function Categories({
  handleCategory,
  category,
}: CategoriesProps) {
  const { data: listCategories } = useGetCategoriesQuery();

  return (
    <div className="flex justify-center items-center">
      <div className="my-3 grid grid-cols-1 md:flex flex-wrap ">
        {listCategories &&
          listCategories.map((item: any, index: number) => (
            <button
              onClick={() => handleCategory(item)}
              key={item.id}
              className={`${
                category === item.id ? `bg-blue-500 ` : 'bg-slate-200	 hover:bg-blue-300'
              } mx-1 mt-4  flex flex-wrap justify-between items-center text-xs sm:text-sm    rounded-lg px-4 py-2 font-bold leading-loose cursor-pointer`}
            >
              {item.name}
            </button>
          ))}
      </div>
    </div>
  );
}
