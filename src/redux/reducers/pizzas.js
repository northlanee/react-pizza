const initialState = {
  items: [],
  isLoading: false,
};

function pizzas(state = initialState, action) {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
}

export default pizzas;
