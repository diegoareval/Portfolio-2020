import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import AppRouter from "./routers/AppRouter";
import * as serviceWorker from "./serviceWorker";

import configureStore from "./store/configureStore";

const store = configureStore();

const state = store.getState();

console.log(state);

const wrappedApplication = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(wrappedApplication, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
