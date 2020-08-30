import { ADD_PIZZA_TO_CART } from "../types";

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
    default:
      return state;
  }
};
