import React, { SFC } from "react";
import { connect } from "react-redux";
import Paginator from "../../../../components/UI/Paginator";
import { ProductsResponse } from "../../../../types";
import { ApplicationState } from "../../../../store";
import { Dispatch } from "redux";
import * as productActions from "../../../../store/products/actions";

interface ProductPaginatorContainerProps {
  productsResponse: ProductsResponse;
  apiCallsInProgress: number;
  loadProducts: (page?: number) => void;
}

const ProductPaginatorContainer: SFC<ProductPaginatorContainerProps> = ({
  productsResponse,
  apiCallsInProgress,
  loadProducts
}) => {
  const { next, previous } = productsResponse;
  const busy = apiCallsInProgress > 0;

  const extractPage = (url: string): number => {
    const { search } = new URL(url);
    const params = new URLSearchParams(search);
    const page = params.get("page");
    return Number(page);
  };

  const handleNext = () => {
    const page = extractPage(next);
    loadProducts(page);
  };

  const handlePrevious = () => {
    const page = extractPage(previous);
    loadProducts(page);
  };

  return (
    <Paginator
      disableNext={!next || busy}
      disablePrev={!previous || busy}
      onClickNext={handleNext}
      onClickPrev={handlePrevious}
    />
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  const actions = {
    loadProducts: (page?: number) => dispatch(productActions.loadProducts(page))
  };
  return actions;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPaginatorContainer);
