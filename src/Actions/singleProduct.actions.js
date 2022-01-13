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
  console.log(comments, empty);
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
  dispatch({
    type: "FETCH_COMMENTS",
  });
  const { comments } = await fetch(`/api/product/${data.id}/addComment`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  dispatch({
    type: "SET_COMMENTS",
    payload: comments,
  });
};

export const deleteComment = (data) => async (dispatch) => {
  dispatch({
    type: "FETCH_COMMENTS",
  });
  const { comments } = await fetch(`/api/product/${data.id}/deletecomment`, {
    method: "delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  dispatch({
    type: "SET_COMMENTS",
    payload: comments,
  });
};
