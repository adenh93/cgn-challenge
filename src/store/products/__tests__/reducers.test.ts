import { ProductState } from "../types";
import { ProductsResponse, Product } from "../../../types";
import { loadProductsSuccess } from "../actions";
import productsReducer from "../reducers";

it("should return a list of products when LOAD_PRODUCTS_SUCCESS is emitted", () => {
  const initialState: ProductState = {
    productsResponse: {
      next: "",
      previous: "",
      results: []
    }
  };

  const products: ProductsResponse = {
    next: "",
    previous: "",
    results: <Product[]>[{ title: "A" }]
  };

  const action = loadProductsSuccess(products);
  const { productsResponse } = productsReducer(initialState, action);

  expect(productsResponse.results.length).toBe(1);
  expect(productsResponse.results[0].title).toBe("A");
});
