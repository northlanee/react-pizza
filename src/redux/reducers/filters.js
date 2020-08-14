const initialState = {
  category: 0,
  sortBy: "popular",
};

function filters(state = initialState, action) {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload.sortBy,
      };
    default:
      return state;
  }
}

export default filters;
