import { createStore, combineReducers } from "redux";
import { loggedIn, postList } from "../reducer";

const store = createStore(combineReducers({loggedIn, postList}))

export default store