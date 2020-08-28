import { SET_PIZZAS, SET_LOADING } from "../types";

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: {
    items,
  },
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: {
    loading,
  },
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  const queryCategory = category === null ? "" : `&category=${category}`;
  const sortDirection = sortBy.type === "name" ? "asc" : "desc";

  dispatch(setLoading(true));
  dispatch(setPizzas([]));
  fetch(
    `http://localhost:3001/pizzas?_sort=${sortBy.type}&_order=${sortDirection}${queryCategory}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(sortBy);
      dispatch(setPizzas(data));
      dispatch(setLoading(false));
    });
};
