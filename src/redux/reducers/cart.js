import { ADD_PIZZA_TO_CART, CLEAR_CART, REMOVE_CART_ITEM } from "../types";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
        totalPrice: 0,
        totalCount: 0,
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.price,
        totalCount: state.totalCount - 1,
      };
    default:
      return state;
  }
};
