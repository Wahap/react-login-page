import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/users/";

export function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(handleResponse)
    .catch(handleError);
}
