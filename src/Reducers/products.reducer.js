const initState = {
  data: [],
  dataRdy: false,
  isFetching: false,
  sortedBy: "default",
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SET_SORT_KEY":
      return { ...state, sortedBy: action.payload };

    case "ADD_NEW_PRODUCT":
      return state;
    case "FETCH_PRODUCTS_DATA":
      return {
        ...state,
        isFetching: true,
      };
    case "SET_PRODUCTS_DATA":
      return {
        isFetching: false,
        data: action.payload,
        dataRdy: true,
      };
    // case "GET_ALL":
    //   break;
    // case "GET_ALL":
    //   break;
    default:
      return state;
  }
};
