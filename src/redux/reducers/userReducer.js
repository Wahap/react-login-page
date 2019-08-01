import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return action.users;
    default:
      return state;
  }
}
