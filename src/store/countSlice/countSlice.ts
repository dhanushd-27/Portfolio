import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  count: number
}

const initialState: InitialState = {
  count: 0
}

export const countSlice = createSlice({
  name: "countSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
  }
})

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer