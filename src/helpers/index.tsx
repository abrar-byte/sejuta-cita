import { saveBookmark } from "../features/bookmarkSlice";

export const handleFilterBook = (data: any, value:string) => {
  // console.log(value,"value");
  
  let filtered = [...data];
  if (value && value.length > 0) {
    filtered = filtered.filter(
      (x) =>
        x.title.toLowerCase().includes(value) ||
        x.authors.find((a: any) => a.toLocaleLowerCase().includes(value))
    );
  }
  return filtered;
};

export const handleMark = (value: any,bookmark:any,dispatch:any,isMarked:any) => {
  const newWishlist = [...bookmark];
  if (isMarked) {
    const index = bookmark.findIndex((x: any) => x.id === value.id);
    newWishlist.splice(index, 1);
 
  } else {
    newWishlist.push(value);
  }

  dispatch(saveBookmark(newWishlist));
};