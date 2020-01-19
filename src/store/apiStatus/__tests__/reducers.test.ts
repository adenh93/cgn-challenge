import apiStatusReducer from "../reducers";
import { beginApiCall, apiCallSuccess, apiCallError } from "../actions";
import { ApiStatusState } from "../types";

it("should increment the amount of apiCallsInProgress when passed BEGIN_API_CALL", () => {
  const initialState: ApiStatusState = {
    apiCallsInProgress: 0,
    isError: false
  };

  const action = beginApiCall();
  const newState = apiStatusReducer(initialState, action);

  expect(newState.apiCallsInProgress).toEqual(1);
  expect(newState.isError).toBe(false);
});

it("should decrement the amount of apiCallsInProgress when passed API_CALL_SUCCESS", () => {
  const initialState: ApiStatusState = {
    apiCallsInProgress: 1,
    isError: false
  };

  const action = apiCallSuccess();
  const newState = apiStatusReducer(initialState, action);

  expect(newState.apiCallsInProgress).toBe(0);
  expect(newState.isError).toBe(false);
});

it("should decrement the amount of apiCallsInProgress when passed API_CALL_ERROR", () => {
  const initialState: ApiStatusState = {
    apiCallsInProgress: 1,
    isError: false
  };

  const action = apiCallError();
  const newState = apiStatusReducer(initialState, action);

  expect(newState.apiCallsInProgress).toBe(0);
  expect(newState.isError).toBe(true);
});

it("should decrement the amount of apiCallsInProgress when passed API_CALL_ERROR", () => {
  const initialState: ApiStatusState = {
    apiCallsInProgress: 1,
    isError: false
  };

  const action = apiCallError();
  const newState = apiStatusReducer(initialState, action);

  expect(newState.apiCallsInProgress).toBe(0);
  expect(newState.isError).toBe(true);
});

it("should reset isError to false when a new API call is made", () => {
  const initialState: ApiStatusState = {
    apiCallsInProgress: 0,
    isError: true
  };

  const action = beginApiCall();
  const { isError } = apiStatusReducer(initialState, action);

  expect(isError).toBe(false);
});
