import * as types from "./actionTypes";
import * as galleryApi from "../../api/galleryApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadGallerySucess(gallery) {
  return { type: types.LOAD_GALLERY_SUCCESS, gallery };
}
export function createGallerySuccess(gallery) {
  return { type: types.CREATE_GALLERY_SUCCESS, gallery };
}

export function updateGallerySuccess(gallery) {
  return { type: types.UPDATE_GALLERY_SUCCESS, gallery };
}

export function deleteCourseOptimistic(gallery) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, gallery };
}

export function loadGallery() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return galleryApi
      .getGallery()
      .then(gallery => {
        dispatch(loadGallerySucess(gallery));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveGallery(GalleryOne) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return galleryApi
      .saveGallery(GalleryOne)
      .then(savedGallery => {
        GalleryOne.id
          ? dispatch(updateGallerySuccess(savedGallery))
          : dispatch(createGallerySuccess(savedGallery));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteGallery(GalleryOne) {
  return function(dispatch) {
    dispatch(deleteCourseOptimistic(GalleryOne));
    return galleryApi.deleteGallery(GalleryOne.id);
  };
}
