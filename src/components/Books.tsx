import { Album } from "lucide-react";
import Highlighter from "react-highlight-words";
import { useGetBooksByCategoryQuery } from "../features/sejutaCitaApi";
import { handleFilterBook, handleMark } from "../helpers";
import { useAppDispatch, useAppSelector } from "../hooks";
import { bookModel } from "../models/bookModel";

interface BooksProps {
  pagination?: string;
  categoryName?: string;
}

export default function Books({ pagination, categoryName }: BooksProps) {
  const { data: listBooks, isSuccess } = useGetBooksByCategoryQuery(pagination);
  const value = useAppSelector((state) => state.searchBar.value);
  const bookmark: any = useAppSelector((state) => state.bookmark.bookmark);
  const dispatch = useAppDispatch();
  const filteredData = listBooks ? handleFilterBook(listBooks, value) : [];


  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {isSuccess ? (
              listBooks &&
              filteredData.map((item: bookModel, index: number) => {
                const isMarked= bookmark.find(({id}:any)=>id === item.id)
                return(
                <div className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={item.cover_url}
                      alt={item.title}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    <Highlighter
                      searchWords={[value]}
                      autoEscape={true}
                      textToHighlight={item.title}
                    />
                  </h3>

                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {categoryName}
                  </p>
                  <div className="grid grid-cols-2 w-full">
                    <p>
                      {item.authors.map((a: any, i: any) => (
                        <Highlighter
                          searchWords={[value]}
                          autoEscape={true}
                          textToHighlight={a}
                        />
                      ))}
                    </p>
                    <Album className={`${isMarked ? 'text-orange-700' : "" } justify-self-end	`}
                      onClick={() => handleMark(item, bookmark, dispatch,isMarked)}
                    >
                      Cek
                    </Album>
                  </div>
                </div>
              )})
            ) : (
              <div>Book Not Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
