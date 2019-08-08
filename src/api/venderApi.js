import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/venders/";

export function getvenders() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
