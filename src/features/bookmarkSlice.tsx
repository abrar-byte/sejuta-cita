import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookModel } from "../models/bookModel";

export interface BookmarkPayload {
    bookmark?: bookModel 
}
const initialState: BookmarkPayload|any = {
    bookmark: [],
}

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    saveBookmark: (state, action: PayloadAction<any>) => {
      state.bookmark = action.payload;
      
    }
  },
});

export const { saveBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;

