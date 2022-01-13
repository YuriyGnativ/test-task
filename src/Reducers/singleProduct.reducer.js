const initState = {
  singleProductData: {},
  comments: [],
  isCommentsFetching: false,
  commentsRdy: false,
  dataRdy: false,
  isFetching: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_PRODUCT_DATA":
      return {
        ...state,
        isFetching: true,
      };
    case "SET_SINGLE_PRODUCT_DATA":
      return {
        ...state,
        singleProductData: action.payload,
        isFetching: false,
        dataRdy: action.payload ? true : false,
      };
    case "FETCH_COMMENTS":
      return {
        ...state,
        isCommentsFetching: true,
      };
    case "SET_COMMENTS":
      return {
        ...state,
        comments: action.payload,
        isCommentsFetching: false,
        commentsRdy: action.payload.length > 0 ? true : false,
      };

    default:
      return state;
  }
};
