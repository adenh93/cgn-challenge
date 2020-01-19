import { fetchProducts } from "../../../api/productService";
import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import { loadProductsSuccess } from "../actions";
import { LOAD_PRODUCTS, LoadProductsAction } from "../types";
import {
  apiCallSuccess,
  apiCallError,
  beginApiCall
} from "../../apiStatus/actions";

export function* handleLoadProducts({ page }: LoadProductsAction) {
  try {
    yield put(beginApiCall());
    const response = yield call(fetchProducts, page);
    yield put(loadProductsSuccess(response));
    yield put(apiCallSuccess());
  } catch (e) {
    yield put(apiCallError());
  }
}

export function* loadProductsSaga() {
  yield all([takeLatest(LOAD_PRODUCTS, handleLoadProducts)]);
}
