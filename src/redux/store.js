import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { filters, pizzas, cart } from "./reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({ filters, pizzas, cart });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
