import { createStore, combineReducers } from "redux";
import { filters, pizzas } from "./reducers";

const store = createStore(combineReducers({ filters, pizzas }));

export default store;
