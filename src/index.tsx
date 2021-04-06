import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./app";

import "./rest.scss";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App mode="dark" />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
