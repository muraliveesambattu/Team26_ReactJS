import { combineReducers, createStore } from "redux";
import { counerReducer } from "./coutnerReducer";

export const store = createStore(counerReducer);
// export const store = combineReducers({
//     counter:counerReducer,
//     users:usersReducer,
//     employees:empRedcer
// })

// 1. Store Is centeralized State
// 2. Reducer contains all the Business Logic
