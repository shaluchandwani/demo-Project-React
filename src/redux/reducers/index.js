import { combineReducers } from "redux";
import Gallery from "./GalleryReducer";
import venders from "./VenderReducer";
import apiStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
  Gallery,
  venders,
  apiStatusReducer
});

export default rootReducer;
