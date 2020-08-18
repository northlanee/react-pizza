import { createStore, combineReducers } from "redux";
import { filters, pizzas } from "./reducers";

const store = createStore(
  combineReducers({ filters, pizzas }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
