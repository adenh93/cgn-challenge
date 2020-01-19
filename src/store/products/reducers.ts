import {
  ProductState,
  ProductActionTypes,
  LOAD_PRODUCTS_SUCCESS
} from "./types";

const initialState: ProductState = {
  productsResponse: {
    next: "",
    previous: "",
    results: []
  }
};

const productsReducer = (
  state: ProductState = initialState,
  action: ProductActionTypes
): ProductState => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return {
        productsResponse: action.response
      };
    default:
      return state;
  }
};

export default productsReducer;
