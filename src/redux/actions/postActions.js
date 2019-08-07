import * as types from "./actionTypes";
import * as postApi from "../../api/postsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function getPostsSuccess(posts) {
  return { type: types.GET_POSTS_SUCCESS, posts };
}

export function getPosts() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return postApi
      .getPosts()
      .then(posts => {
        dispatch(getPostsSuccess(posts.data));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
