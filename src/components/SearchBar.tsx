import React from "react";
import { saveValue } from "../features/searchSlice";
import { useAppDispatch } from '../hooks';

export default function SearchBar() {
  const dispatch = useAppDispatch()
  
  return (
    <div className="flex justify-center items-center">
      <input
      placeholder="Type here to search"
        onChange={(e: any) =>dispatch(saveValue(e.target.value.toLocaleLowerCase()))}
        className="border-2 border-blue-300 rounded-md  w-96  h-10 p-2 mt-4"
      />
    </div>
  );
}
