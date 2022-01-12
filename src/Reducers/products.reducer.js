const initState = {
  data: [],
  dataRdy: false,
  isFetching: false,
};

export default (state = initState, action) => {
  switch (action.type) {
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
