export interface User {
  id: number;
  fname: string;
  lname: string;
  email: string;
}

// Action Types
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action Interfaces
interface FetchUsersRequest {
  type: typeof FETCH_USERS_REQUEST;
}

interface FetchUsersSuccess {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[];
}

interface FetchUsersFailure {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}

export type UserActionTypes =
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure;

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}
