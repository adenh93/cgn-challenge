import {
  ApiStatusState,
  ApiStatusActionTypes,
  BEGIN_API_CALL,
  API_CALL_SUCCESS,
  API_CALL_ERROR
} from "./types";

const initialState: ApiStatusState = {
  isError: false,
  apiCallsInProgress: 0
};

const apiStatusReducer = (
  state: ApiStatusState = initialState,
  action: ApiStatusActionTypes
): ApiStatusState => {
  switch (action.type) {
    case BEGIN_API_CALL:
      return {
        isError: false,
        apiCallsInProgress: state.apiCallsInProgress + 1
      };
    case API_CALL_SUCCESS:
      return {
        isError: false,
        apiCallsInProgress: state.apiCallsInProgress - 1
      };
    case API_CALL_ERROR:
      return {
        isError: true,
        apiCallsInProgress: state.apiCallsInProgress - 1
      };
    default:
      return state;
  }
};

export default apiStatusReducer;
