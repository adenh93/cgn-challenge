import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import theme from "./theme";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
