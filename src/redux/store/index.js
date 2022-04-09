import { createStore, combineReducers } from "redux";
import { userReducer, postListReducer } from "../reducer";

const store = createStore(combineReducers({userReducer, postListReducer}))

export default store