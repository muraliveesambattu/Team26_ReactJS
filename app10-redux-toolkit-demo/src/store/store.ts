import { configureStore } from "@reduxjs/toolkit";
import userReducer from './usersSlice'
const store = configureStore({
  reducer: {
    usersData:userReducer
  },
});

export default store