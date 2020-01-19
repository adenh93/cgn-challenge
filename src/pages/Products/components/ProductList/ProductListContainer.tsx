import React, { SFC, useEffect } from "react";
import ProductList from "./ProductList";
import { Dispatch } from "redux";
import { ProductsResponse } from "../../../../types";
import { connect } from "react-redux";
import { ApplicationState } from "../../../../store";
import * as productActions from "../../../../store/products/actions";

export interface ProductListContainerProps {
  productsResponse: ProductsResponse;
  apiCallsInProgress: number;
  isError: boolean;
  loadProducts: (page?: number) => void;
}

const ProductListContainer: SFC<ProductListContainerProps> = ({
  productsResponse,
  apiCallsInProgress,
  isError,
  loadProducts
}) => {
  const { results: products } = productsResponse;

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductList
      products={products}
      loading={apiCallsInProgress > 0}
      error={isError}
    />
  );
};

const mapStateToProps = ({
  productState,
  apiStatusState
}: ApplicationState) => {
  return {
    productsResponse: productState.productsResponse,
    apiCallsInProgress: apiStatusState.apiCallsInProgress,
    isError: apiStatusState.isError
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const actions = {
    loadProducts: (page?: number) => dispatch(productActions.loadProducts(page))
  };
  return actions;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
