import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  students: [],
};
export const deleteStudentAsyncAction = createAsyncThunk(
  "deleteStudentAsyncAction",
  async (user) => {
    const response = await axios.delete(
      "http://localhost:3000/users/" + user.id
    );
    const { data } = await axios.get("http://localhost:3000/users");

    return data;
  }
);

export const createStudentAsyncAction = createAsyncThunk(
  "createStudentAsyncAction",
  async (user) => {
    const response = await axios.post("http://localhost:3000/users/", user);
    const { data } = await axios.get("http://localhost:3000/users");

    return data;
  }
);

export const updateStudentAsyncAction = createAsyncThunk(
  "updateStudentAsyncAction",
  async (user) => {
    const response = await axios.put(
      "http://localhost:3000/users/" + user.id,
      user
    );
    const { data } = await axios.get("http://localhost:3000/users");

    return data;
  }
);

export const getStudentsAsycCall = createAsyncThunk(
  "getStudentsAsycCall",
  async () => {
    const { data } = await axios.get("http://localhost:3000/users");

    return data;
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStudentsAsycCall.fulfilled, (state, action) => {
      state.students = action.payload;
    });
    builder.addCase(deleteStudentAsyncAction.fulfilled, (state, action) => {
      state.students = action.payload;
    });
    builder.addCase(createStudentAsyncAction.fulfilled,(state,action)=>{
        state.students = action.payload;
    })
    builder.addCase(updateStudentAsyncAction.fulfilled,(state,action)=>{
        state.students = action.payload;
    })
  },
});

export default studentsSlice.reducer;
