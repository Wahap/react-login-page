import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";

export function getPosts() {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(handleResponse)
    .catch(handleError);
}
