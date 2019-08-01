import { combineReducers } from "redux";
import users from "./userReducer";
import currentUser from "./loginReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  users,
  apiCallsInProgress,
  currentUser
});

export default rootReducer;
