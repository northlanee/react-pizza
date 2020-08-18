const initialState = {
  category: null,
  sortBy: 0,
};

function filters(state = initialState, action) {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload.sortBy,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload.catIndex,
      };
    default:
      return state;
  }
}

export default filters;
