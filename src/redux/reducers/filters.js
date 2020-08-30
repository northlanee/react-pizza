import { SET_SORT_BY, SET_CATEGORY } from "./../types";

const initialState = {
  category: null,
  sortBy: { label: "популярности", type: "rating" },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload.sortBy,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload.catIndex,
      };
    default:
      return state;
  }
};
