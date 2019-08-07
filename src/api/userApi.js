import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";
const baseUrl = process.env.API_URL + "/users/";

// export function getUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users")
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function getUsers() {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then(handleResponse)
//     .catch(handleError);
// }

export function getUsers() {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(handleResponse)
    .catch(handleError);
}
