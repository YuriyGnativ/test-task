export const fetchSingleProductData = (id) => async (dispatch) => {
  dispatch({
    type: "FETCH_SINGLE_PRODUCT_DATA",
  });
  const { product } = await fetch(`/api/product/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  dispatch({
    type: "SET_SINGLE_PRODUCT_DATA",
    payload: product,
  });
};

export const fetchComments = (id) => async (dispatch) => {
  dispatch({
    type: "FETCH_COMMENTS",
  });
  const { comments } = await fetch(`/api/product/${id}/comments`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  dispatch({
    type: "SET_COMMENTS",
    payload: comments,
  });
};

export const addComment = (data) => async (dispatch) => {
  dispatch({
    type: "FETCH_COMMENTS",
  });
  const { comments } = await fetch(`/api/product/${id}/addComment`, {
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
  const { comments } = await fetch(`/api/product/${id}/deletecomment`, {
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
