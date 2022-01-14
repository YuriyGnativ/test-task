const initState = {
  singleProductData: {},
  comments: [],
  isCommentsFetching: false,
  commentsRdy: false,
  dataRdy: false,
  isFetching: false,
  postingComment: false,
  deletingComment: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_PRODUCT_DATA":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_SINGLE_PRODUCT_DATA_SUCCESS":
      return {
        ...state,
        singleProductData: action.payload,
        isFetching: false,
        dataRdy: true,
      };
    case "FETCH_SINGLE_PRODUCT_DATA_FAILURE":
      return {
        ...state,
        isFetching: false,
        dataRdy: false,
      };

    case "FETCH_COMMENTS":
      return {
        ...state,
        isCommentsFetching: true,
      };
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        comments: action.payload,
        isCommentsFetching: false,
        commentsRdy: true,
        postingComment: false,
        deletingComment: false,
      };
    case "FETCH_COMMENTS_FAILURE":
      return {
        ...state,
        comments: action.payload,
        commentsRdy: false,
        isCommentsFetching: false,
        postingComment: false,
        deletingComment: false,
      };
    case "ADD_COMMENT":
      return {
        ...state,
        postingComment: true,
      };
    case "DELETE_COMMENT":
      return {
        ...state,
        deletingComment: true,
      };
    default:
      return state;
  }
};
