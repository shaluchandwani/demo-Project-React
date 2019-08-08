import * as types from "./actionTypes";
import * as venderApi from "../../api/venderApi";

export function loadvendersSuccess(venders) {
  return { type: types.LOAD_VENDERS_SUCCESS, venders };
}

export function loadvenders() {
  return function(dispatch) {
    return venderApi
      .getvenders()
      .then(venders => {
        dispatch(loadvendersSuccess(venders));
      })
      .catch(error => {
        throw error;
      });
  };
}
