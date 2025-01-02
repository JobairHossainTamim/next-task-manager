import { configureStore } from "@reduxjs/toolkit";
import { loaderSlice } from "./slice/loaderSlice";
import { userSlice } from "./slice/userSlice";

const store = configureStore({
  reducer: {
    loaders: loaderSlice.reducer,
    users: userSlice.reducer,
  },
});

export default store;
