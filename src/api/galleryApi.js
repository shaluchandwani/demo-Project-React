import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/Gallery/";

export function getGallery() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveGallery(GalleryOne) {
  debugger;
  return fetch(baseUrl + (GalleryOne.id || ""), {
    method: GalleryOne.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(GalleryOne)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteGallery(GalleryId) {
  return fetch(baseUrl + GalleryId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
