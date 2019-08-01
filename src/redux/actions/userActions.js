import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function getUsersSuccess(users) {
  return { type: types.GET_USERS_SUCCESS, users };
}

export function getUsers() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return userApi
      .getUsers()
      .then(users => {
        dispatch(getUsersSuccess(users));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
