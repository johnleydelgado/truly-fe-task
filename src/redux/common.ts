import { createSlice } from "@reduxjs/toolkit";

export interface CommonState {
  searchTerm: string;
}

const initialState: CommonState = {
  searchTerm: "",
};

export const common = createSlice({
  name: "common",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchTerm } = common.actions;

export default common.reducer;
