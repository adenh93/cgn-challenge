import React, { SFC } from "react";
import { Product } from "../../../../types";
import ProductListItem from "../ProductListItem";
import { Grid } from "@material-ui/core";
import Alert from "../../../../components/UI/Alert";

export interface ProductListProps {
  products: Array<Product>;
  loading: boolean;
  error: boolean;
}

const ProductList: SFC<ProductListProps> = ({ products, loading, error }) => {
  if (error)
    return (
      <Alert
        severity="error"
        message="An error occured while loading product results!"
      />
    );

  if (loading) return <></>;

  if (!products.length)
    return <Alert severity="warning" message="No product results found!" />;

  return (
    <Grid container spacing={3}>
      {products.map((product, key) => (
        <Grid key={key} item lg={3} md={6} sm={6} xs={12}>
          <ProductListItem {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
