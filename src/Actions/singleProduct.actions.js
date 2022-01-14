export const fetchSingleProductData = (id) => async (dispatch) => {
  dispatch({
    type: "FETCH_SINGLE_PRODUCT_DATA",
  });
  const { product, error } = await fetch(`/api/product/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  if (!error) {
    dispatch({
      type: "FETCH_SINGLE_PRODUCT_DATA_SUCCESS",
      payload: product,
    });
  } else {
    dispatch({
      type: "FETCH_SINGLE_PRODUCT_DATA_FAILURE",
    });
  }
};

export const fetchComments = (id) => async (dispatch) => {
  dispatch({
    type: "FETCH_COMMENTS",
  });
  const { comments, empty } = await fetch(`/api/product/${id}/comments`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  if (!empty) {
    dispatch({
      type: "FETCH_COMMENTS_SUCCESS",
      payload: comments,
    });
  } else {
    dispatch({
      type: "FETCH_COMMENTS_FAILURE",
      payload: comments,
    });
  }
};

export const addComment = (data) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    dispatch({
      type: "ADD_COMMENT",
    });

    const { comments, error, message } = await fetch(
      `/api/product/${data.id}/addcomment`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: data.value }),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (!error) {
      dispatch({
        type: "FETCH_COMMENTS_SUCCESS",
        payload: comments,
      });
      resolve();
    } else {
      dispatch({
        type: "FETCH_COMMENTS_FAILURE",
        payload: comments,
      });
      reject(message);
    }
  });
};

export const deleteComment = (data) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    dispatch({
      type: "DELETE_COMMENT",
    });
    const { comments, error } = await fetch(
      `/api/product/${data.productId}/deletecomment`,
      {
        method: "delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment_id: data.commentId }),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (!error) {
      dispatch({
        type: "FETCH_COMMENTS_SUCCESS",
        payload: comments,
      });
      resolve();
    } else {
      dispatch({
        type: "FETCH_COMMENTS_FAILURE",
        payload: comments,
      });
    }
  });
};
