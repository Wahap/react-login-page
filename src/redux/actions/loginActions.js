import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loginSuccess(users) {
  return { type: types.LOGIN_SUCCESS, users };
}

export function login(email, pass) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return userApi
      .getUsers()
      .then(users => {
        // const user = users.find(user => user.email === email) || null;
        dispatch(loginSuccess(users));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
