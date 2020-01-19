import { ProductsResponse } from "../../types";

export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCT_SUCCESS";

export interface ProductState {
  productsResponse: ProductsResponse;
}

export interface LoadProductsAction {
  type: typeof LOAD_PRODUCTS;
  page?: number;
}

export interface LoadProductsSuccessAction {
  type: typeof LOAD_PRODUCTS_SUCCESS;
  response: ProductsResponse;
}

export type ProductActionTypes = LoadProductsAction | LoadProductsSuccessAction;
