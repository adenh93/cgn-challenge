import React, { SFC } from "react";
import { ProductsResponse } from "../../../../types";
import { connect } from "react-redux";
import { ApplicationState } from "../../../../store";
import ProductTotals from "./ProductTotals";

interface ProductTotalsContainerProps {
  productsResponse: ProductsResponse;
  apiCallsInProgress: number;
}

const ProductTotalsContainer: SFC<ProductTotalsContainerProps> = ({
  productsResponse,
  apiCallsInProgress
}) => {
  const { results: products } = productsResponse;

  const getTotal = () => {
    if (!products.length) return 0;

    const sum = products
      .map(({ price }) => price)
      .reduce((prev, next) => prev + next);

    return sum;
  };

  return (
    <>
      <ProductTotals
        total={getTotal()}
        isWaiting={apiCallsInProgress > 0}
        productCount={products.length}
      />
    </>
  );
};

const mapStateToProps = ({
  productState,
  apiStatusState
}: ApplicationState) => {
  return {
    productsResponse: productState.productsResponse,
    apiCallsInProgress: apiStatusState.apiCallsInProgress
  };
};

export default connect(mapStateToProps)(ProductTotalsContainer);
