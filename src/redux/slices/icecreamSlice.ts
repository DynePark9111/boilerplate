import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  icecream: number;
};

const initialState: initialState = {
  icecream: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    order: (state) => {
      state.icecream--;
    },
    restock: (state, action: PayloadAction<number>) => {
      state.icecream += action.payload;
    },
  },
});

export default icecreamSlice.reducer;
export const { order, restock } = icecreamSlice.actions;
