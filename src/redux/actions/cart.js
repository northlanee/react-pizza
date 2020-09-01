import { ADD_PIZZA_TO_CART, CLEAR_CART, REMOVE_CART_ITEM } from "../types";

export const addPizzaToCart = (pizza) => ({
  type: ADD_PIZZA_TO_CART,
  payload: pizza,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const removeCartItem = (id, price) => ({
  type: REMOVE_CART_ITEM,
  payload: { id, price },
});
