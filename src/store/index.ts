import { combineReducers } from "redux";
import { ProductState } from "./products/types";
import productReducer from "./products/reducers";
import { ApiStatusState } from "./apiStatus/types";
import apiStatusReducer from "./apiStatus/reducers";

export interface ApplicationState {
  productState: ProductState;
  apiStatusState: ApiStatusState;
}

const rootReducer = combineReducers<ApplicationState>({
  productState: productReducer,
  apiStatusState: apiStatusReducer
});

export default rootReducer;
