import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/auth/auth";

const store = configureStore({
  reducer: {
    authSlice
  }
});

export default store;
