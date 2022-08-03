import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // we need to provide our store across our range

import "./index.css";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
