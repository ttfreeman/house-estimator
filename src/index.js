import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unstated";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
