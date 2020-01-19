import React, { SFC } from "react";
import ProductTotals from "./components/ProductTotals";
import ProductPaginator from "./components/ProductPaginator";
import ProductList from "./components/ProductList";
import { Grid, Typography } from "@material-ui/core";

const ProductListPage: SFC = () => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Products</Typography>
      </Grid>
      <Grid item xs={12}>
        <ProductTotals />
      </Grid>
      <Grid item xs={12}>
        <ProductPaginator />
      </Grid>
      <Grid item xs={12}>
        <ProductList />
      </Grid>
    </Grid>
  </>
);

export default ProductListPage;
