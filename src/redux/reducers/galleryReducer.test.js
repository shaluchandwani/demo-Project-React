import GalleryReducer from "./GalleryReducer";
import * as actions from "../actions/GalleryActions";

it("should add Gallery when passed CREATE_GALLERY_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      title: "A"
    },
    {
      title: "B"
    }
  ];

  const newGallery = {
    title: "C"
  };

  const action = actions.createGallerySuccess(newGallery);

  // act
  const newState = GalleryReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update Gallery when passed UPDATE_GALLERY_SUCCESS", () => {
  // arrange
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" }
  ];

  const Gallery = { id: 2, title: "New Title" };
  const action = actions.updateGallerySuccess(Gallery);

  // act
  const newState = GalleryReducer(initialState, action);
  const updatedGallery = newState.find(a => a.id == Gallery.id);
  const untouchedGallery = newState.find(a => a.id == 1);

  // assert
  expect(updatedGallery.title).toEqual("New Title");
  expect(untouchedGallery.title).toEqual("A");
  expect(newState.length).toEqual(3);
});
