import { createStore, applyMiddleware, Store } from "redux";
// import thunkMiddleware, { ThunkMiddleware } from "redux-thunk";
import { ThunkMiddleware, thunk as thunkMiddleware } from "redux-thunk";

import { usersReducer } from "./usersReducer";
import { UserState } from "./userTypes";

// Define Action Type
interface AddUserAction {
  type: "ADD_USER";
  payload: string;
}

type UserActions = AddUserAction;

// Properly typed store with thunk
const store: Store<UserState, UserActions> = createStore(
  usersReducer,
  applyMiddleware(
    thunkMiddleware as unknown as ThunkMiddleware<UserState, UserActions>
  )
);

export default store;
