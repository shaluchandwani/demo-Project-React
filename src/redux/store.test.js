import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as GalleryActions from "./actions/GalleryActions";

it("Should handle creating Gallery", function() {
  const store = createStore(rootReducer, initialState);
  const GalleryOne = {
    title: "Clean Code"
  };
  const action = GalleryActions.createGallerySuccess(GalleryOne);
  store.dispatch(action);
  const createdGallery = store.getState().Gallery[0];
  expect(createdGallery).toEqual(GalleryOne);
});
