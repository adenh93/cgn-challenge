import React, { SFC } from "react";
import { Typography, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";

export interface ProductTotalsItemProps {
  label: string;
  amount: number;
  isWaiting: boolean;
}

const ProductTotalsItem: SFC<ProductTotalsItemProps> = ({
  label,
  amount,
  isWaiting
}) => {
  const { root, small } = useStyles();

  return (
    <Typography className={root} component="h6">
      {label}:{" "}
      {isWaiting ? (
        <CircularProgress size={15} />
      ) : (
        <small className={small}>${amount.toFixed(2)}</small>
      )}
    </Typography>
  );
};

export default ProductTotalsItem;
