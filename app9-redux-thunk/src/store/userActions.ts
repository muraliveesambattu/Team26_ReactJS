import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  User,
} from "./userTypes";

export const fetchUsersAsyncAction = () => {
  return async (dispatch: any) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const response = await axios.get<User[]>("http://localhost:3000/users");
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: (error as Error).message,
      });
    }
  };
};

export const deleteUsersAsyncAction = (userid) => {
  return async (dispatch: any) => {
    try {
      const deleteResponse = await axios.delete(
        "http://localhost:3000/users/" + userid
      );
      const response = await axios.get<User[]>("http://localhost:3000/users");
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: (error as Error).message,
      });
    }
  };
};

export const addUsersAsyncAction = (user) => {
  return async (dispatch: any) => {
    try {
      const deleteResponse = await axios.post(
        "http://localhost:3000/users/",
        user
      );
      const response = await axios.get<User[]>("http://localhost:3000/users");
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: (error as Error).message,
      });
    }
  };
};

export const updateUsersAsyncAction = (user) => {
  console.log(user);
  return async (dispatch: any) => {
    try {
      const updateResponse = await axios.put(
        "http://localhost:3000/users/" + user.id,
        user
      );
      const response = await axios.get<User[]>("http://localhost:3000/users");
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: (error as Error).message,
      });
    }
  };
};
