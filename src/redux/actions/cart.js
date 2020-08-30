import { ADD_PIZZA_TO_CART } from "../types";

export const addPizzaToCart = (pizza) => ({
  type: ADD_PIZZA_TO_CART,
  payload: pizza,
});
