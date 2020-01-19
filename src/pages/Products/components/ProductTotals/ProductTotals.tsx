import React, { SFC } from "react";
import ProductTotalsItem from "../ProductTotalsItem";

interface ProductTotalsProps {
  total: number;
  productCount: number;
  isWaiting: boolean;
}

const ProductTotals: SFC<ProductTotalsProps> = ({
  total,
  productCount,
  isWaiting
}) => (
  <>
    <ProductTotalsItem
      label="Total Price"
      amount={total}
      isWaiting={isWaiting}
    />
    <ProductTotalsItem
      label="Average Price"
      amount={productCount ? total / productCount : 0}
      isWaiting={isWaiting}
    />
  </>
);

export default ProductTotals;
