import { configureStore } from "@reduxjs/toolkit";
import bmiInfoReducer from "./features/bmiInfo/bmiInfoSlice";

export const store = configureStore({
  reducer: {
    bmiInfo: bmiInfoReducer,
  },
});
