import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import GlobalStyle from "./GlobalStyle.jsx";
import App from "./App";

import user from "./reducers/user";
import cart from "./reducers/cart";
import ui from "./reducers/ui";

const reducer = combineReducers({
  user: user.reducer,
  cart: cart.reducer,
  ui: ui.reducer,
});
const store = configureStore({ reducer });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
