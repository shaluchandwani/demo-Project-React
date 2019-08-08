import { combineReducers } from "redux";
import Gallery from "./GalleryReducer";
import venders from "./VenderReducer";

const rootReducer = combineReducers({
  Gallery,
  venders
});

export default rootReducer;
