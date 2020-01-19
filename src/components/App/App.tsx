import React from "react";
import { Box } from "@material-ui/core";
import Header from "../UI/Header";
import ProductListPage from "../../pages/Products/ProductListPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="Products" />
      <Box p={3}>
        <ProductListPage />
      </Box>
    </div>
  );
};

export default App;
