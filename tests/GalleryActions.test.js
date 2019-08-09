import * as GalleryActions from "../src/redux/actions/GalleryActions";
import * as types from "../src/redux/actions/actionTypes";
import { Gallery } from "../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Gallery Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_GALLERY_SUCCESS when loading Gallery", () => {
      fetchMock.mock("*", {
        body: Gallery,
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_GALLERY_SUCCESS, gallery: Gallery }
      ];
      const store = mockStore({ gallery: [] });
      return store.dispatch(GalleryActions.loadGallery()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("createGallerySuccess", () => {
  it("should create a CREATE_GALLERY_SUCCESS action", () => {
    const gallery = Gallery[0];
    const expectedAction = {
      type: types.CREATE_GALLERY_SUCCESS,
      gallery
    };
    const action = GalleryActions.createGallerySuccess(gallery);
    expect(action).toEqual(expectedAction);
  });
});
