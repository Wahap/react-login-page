import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loginSuccess(user) {
  return { type: types.LOGIN_SUCCESS, user };
}

export function logOutSuccess() {
  return { type: types.LOGOUT_SUCCESS };
}

export function logOut() {
  return function(dispatch) {
    dispatch(beginApiCall());
    dispatch(logOutSuccess());
  };
}

export function login(email, pass) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return userApi
      .getUsers()
      .then(users => {
        const user = users.find(user => user.email === email) || null;
        dispatch(loginSuccess(user));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
