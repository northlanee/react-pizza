import { SET_PIZZAS, SET_LOADING } from "../types";

const initialState = {
  items: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        items: action.payload.items,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.loading,
      };
    default:
      return state;
  }
};
