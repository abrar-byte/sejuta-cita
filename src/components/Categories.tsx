import React from "react";
import { useGetCategoriesQuery } from "../features/categories/sejutaCitaApi";


interface CategoriesProps {
  handleCategory:any;
  category:number
}



export default function Categories({ handleCategory,category }: CategoriesProps) {
  const { data: listCategories, isSuccess } = useGetCategoriesQuery();

  return (
    <div className="flex justify-center items-center">
      <div className="my-3 grid grid-cols-1 md:flex flex-wrap -m-1">
        {listCategories &&
          listCategories.map((item: any, index: number) => (
            <button
            onClick={()=>handleCategory(item)}
              key={item.id}
            className={`${category === item.id && `bg-gray-300` } m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300  rounded-lg px-4 py-2 font-bold leading-loose cursor-pointer` }
            >
              {item.name}
            </button>
          ))}
      </div>
    </div>
  );
}
