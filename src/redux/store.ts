import { configureStore } from "@reduxjs/toolkit";
import reducer from "./user/reducer";

export const store = configureStore({
  reducer: {
    user: reducer,
  },
});
