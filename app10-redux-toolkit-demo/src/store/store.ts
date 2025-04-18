import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";
import studentsSlice from "./studentsSlice";

const store = configureStore({
  reducer: {
    usersData: userReducer,
    students: studentsSlice,
  },
});

export default store;
