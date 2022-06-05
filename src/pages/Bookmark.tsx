import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  useGetCategoriesQuery } from "../features/sejutaCitaApi";
import {  useAppSelector } from "../hooks";
import { bookModel } from "../models/bookModel";

export default function Bookmark() {
  const bookmark: any = useAppSelector((state) => state.bookmark.bookmark);
  const [idCategory, setIdCategory] = useState(1)
  const { data: listCategories,  } = useGetCategoriesQuery();


  return (
    <div>
      <div className="flex justify-center items-center">
      <div className="my-3 grid grid-cols-1 md:flex flex-wrap  ">
        {listCategories && listCategories.map((item:any)=>(
          <div onClick={()=>setIdCategory(item.id)} className={`${item.id === idCategory ? "bg-blue-500" : "bg-slate-200	 hover:bg-blue-300"} mx-1 mt-4  flex flex-wrap justify-between items-center text-xs sm:text-sm    rounded-lg px-4 py-2 font-bold leading-loose cursor-pointer `}>{item.name}</div>
        ))}
      </div>
      </div>
     
          <div className="text-black text-4xl p-10">Bookmark Page</div>
      <div className="flex justify-center items-center">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {bookmark ? (
              bookmark.map((item: bookModel, index: number) => (
                item.category_id === idCategory && <div className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={item.cover_url}
                      alt={item.title}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
                  <div>
                    {item.authors.map((a: any, i: any) => (
                      <p>{a}</p>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div>Book Not Found</div>
            )}
          </div>
        </div>
      </div>
      <Link to="/" className="flex justify-start p-6 " > Go Back</Link>
    </div>

  );
}
