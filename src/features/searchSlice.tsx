import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchPayload {
    value: string 
}
const initialState: SearchPayload = {
    value: "",
}

export const searchSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    saveValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      console.log(action,"action");
      
    }
  },
});

export const { saveValue } = searchSlice.actions;

export default searchSlice.reducer;

