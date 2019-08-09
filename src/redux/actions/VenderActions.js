import * as types from "./actionTypes";
import * as venderApi from "../../api/venderApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadvendersSuccess(venders) {
  return { type: types.LOAD_VENDERS_SUCCESS, venders };
}

export function loadvenders() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return venderApi
      .getvenders()
      .then(venders => {
        dispatch(loadvendersSuccess(venders));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
