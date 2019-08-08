import * as types from "./actionTypes";
import * as galleryApi from "../../api/galleryApi";

export function loadGallerySucess(gallery) {
  return { type: types.LOAD_GALLERY_SUCCESS, gallery };
}
export function createGallerySuccess(gallery) {
  return { type: types.CREATE_GALLERY_SUCCESS, gallery };
}

export function updateGallerySuccess(gallery) {
  return { type: types.UPDATE_GALLERY_SUCCESS, gallery };
}

export function loadGallery() {
  return function(dispatch) {
    return galleryApi
      .getGallery()
      .then(gallery => {
        dispatch(loadGallerySucess(gallery));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveGallery(GalleryOne) {
  debugger;
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    console.log(galleryApi);
    return galleryApi
      .saveGallery(GalleryOne)
      .then(savedGallery => {
        console.log(GalleryOne.id);
        GalleryOne.id
          ? dispatch(
              updateGallerySuccess(savedGallery),
              console.log("galeery updated", savedGallery)
            )
          : dispatch(createGallerySuccess(savedGallery));
      })
      .catch(error => {
        throw error;
      });
  };
}
