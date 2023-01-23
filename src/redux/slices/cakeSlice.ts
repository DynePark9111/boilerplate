import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  cakes: number;
};

const initialState: initialState = {
  cakes: 20,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: (state) => {
      state.cakes--;
    },
    restock: (state, action: PayloadAction<number>) => {
      state.cakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { order, restock } = cakeSlice.actions;
