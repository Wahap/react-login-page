import { combineReducers } from "redux";
import users from "./userReducer";
import currentUser from "./loginReducer";
import posts from "./postReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  users,
  apiCallsInProgress,
  currentUser,
  posts
});

export default rootReducer;
