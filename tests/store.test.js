import { createStore } from "redux";
import rootReducer from "../src/redux/reducers";
import initialState from "../src/redux/reducers/initialState";
import * as GalleryActions from "../src/redux/actions/GalleryActions";

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
