import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function VenderReducer(state = initialState.venders, action) {
  switch (action.type) {
    case types.LOAD_VENDERS_SUCCESS:
      return action.venders;
    default:
      return state;
  }
}
