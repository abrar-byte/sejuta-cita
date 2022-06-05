import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'
import { useGetAllBooksQuery } from '../features/sejutaCitaApi';


interface PaginationProps {
  pageSize: number;
  pageNumber: number;
  setPageSize:(value: number) => void;
  setPageNumber:(value: number) => void;
  category:number
}
export default function Pagination({pageSize,pageNumber,setPageSize,setPageNumber,category}:PaginationProps) {
  const pageList = [5, 10, 15, 20, 25];
  const [offset, setOffset] = useState(0);
const{data:allBook}=useGetAllBooksQuery(category)



  return (
    <div className='flex items-center py-5'>
       <div className="flex w-full justify-between px-2 md:justify-center flex-wrap  items-center">
            <nav>
              <ul className="">
                <li className="flex items-center">
                  <ChevronLeft
                    onClick={() => offset > 0 && setOffset(offset - 1)}
                    className="cursor-pointer text-3xl hover:text-primary mr-2"
                    role="button"
                  />

                  {Array(allBook &&  Math.ceil(allBook.length/pageSize))
                    .fill(1)
                    .map((item, idx) => idx)
                    .slice(offset)
                    .map((item, id) => (
                      <div key={id}>
                        <button
                          className={`${
                            pageNumber === item
                              ? "rounded-md bg-gray-200 text-blue-500"
                              : "text-black hover:text-primary ml-2"
                          } mx-1 px-3 py-1 ${id > 3 - 1 ? "hidden" : ""}`}
                          onClick={() => setPageNumber(item)}
                        >
                          {item + 1}
                        </button>
                      </div>
                    ))}
                  <ChevronRight
                    onClick={() =>
                      Array(allBook &&  Math.ceil(allBook.length/pageSize)).length -
                        offset >
                        3 && setOffset(offset + 1)
                    }
                    className="cursor-pointer  text-3xl hover:text-primary ml-2"
                  />
                </li>
              </ul>
            </nav>
            <select
              onChange={(e:any) => setPageSize(e.target.value)}
              className="w-20 form-select box mt-3 sm:mt-0 h-8 border-slate-300	rounded-md"
            >
              {pageList.map((item, index) => (
                <option value={item} selected={pageSize === item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
    </div>
  )
}
