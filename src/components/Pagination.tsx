import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'
import { useGetAllBooksQuery } from '../features/categories/sejutaCitaApi';


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
    <div className='flex justify-center items-center'>
       <div className="intro-y col-span-12 flex just flex-wrap sm:flex-row sm:flex-nowrap items-center">
            <nav className="w-full sm:w-auto sm:mr-auto">
              <ul className="pagination">
                <li className="page-item flex items-center">
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
                              ? "rounded-md bg-white text-black"
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
            {/* {Array.from(Array(10).keys())} */}
            <select
              onChange={(e:any) => setPageSize(e.target.value)}
              className="w-20 form-select box mt-3 sm:mt-0 border-slate-300	rounded-md"
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
