import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function GalleryReducer(state = initialState.Gallery, action) {
  switch (action.type) {
    case types.CREATE_GALLERY_SUCCESS:
      return [...state, { ...action.gallery }];
    case types.LOAD_GALLERY_SUCCESS:
      return action.gallery;
    case types.UPDATE_GALLERY_SUCCESS:
      return state.map(gallery =>
        gallery.id === action.gallery.id ? action.gallery : gallery
      );
    default:
      return state;
  }
}
