import { createStore } from "redux";
import rootReducer from "../..";
import { ProductsResponse, Product } from "../../../types";
import { loadProductsSuccess } from "../actions";

it("Should handle loading products", () => {
  const store = createStore(rootReducer);
  const products: ProductsResponse = {
    next: "",
    previous: "",
    results: <Product[]>[{ title: "A" }]
  };

  const action = loadProductsSuccess(products);
  store.dispatch(action);

  const { productsResponse } = store.getState().productState;
  expect(productsResponse).toEqual(products);
});
