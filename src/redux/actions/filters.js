import { SET_SORT_BY, SET_CATEGORY } from "./../types";

export const setSortBy = (type) => ({
  type: SET_SORT_BY,
  payload: {
    sortBy: type,
  },
});

export const setCategory = (catIndex) => ({
  type: SET_CATEGORY,
  payload: {
    catIndex,
  },
});
