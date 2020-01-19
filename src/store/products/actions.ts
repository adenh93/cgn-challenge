import { ProductsResponse } from "../../types";
import {
  ProductActionTypes,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS
} from "./types";

export const loadProductsSuccess = (
  response: ProductsResponse
): ProductActionTypes => {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    response
  };
};

export const loadProducts = (page?: number): ProductActionTypes => {
  return {
    type: LOAD_PRODUCTS,
    page
  };
};
