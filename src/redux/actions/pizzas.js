export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: {
    items,
  },
});

export const fetchPizzas = () => (dispatch) => {
  fetch("http://localhost:3001/db.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => dispatch(setPizzas(data.pizzas)));
};
