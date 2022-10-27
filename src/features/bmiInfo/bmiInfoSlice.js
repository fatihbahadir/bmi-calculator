import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  height: 0,
  weight: 0,
  bmiValue: 0,
};

export const bmiInfoSlice = createSlice({
  name: "bmiInfo",
  initialState,
  reducers: {
    setGlobalName: (state, action) => {
      state.name = action.payload;
    },
    setGlobalHeight: (state, action) => {
      state.height = action.payload;
    },
    setGlobalWeight: (state, action) => {
      state.weight = action.payload;
    },
    calculateBmi: (state, action) => {
      state.bmiValue = Math.round(
        action.payload.weight / Math.pow(action.payload.height / 100, 2)
      );
    },
    clearData: (state) => {
      localStorage.removeItem('data')
    },
  },
});

export const {
  setGlobalName,
  setGlobalHeight,
  setGlobalWeight,
  calculateBmi,
  clearData,
} = bmiInfoSlice.actions;

export default bmiInfoSlice.reducer;
