export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS_DATA" });

  const { products } = await fetch("/api/product").then((res) => {
    return res.json();
  });
  dispatch({ type: "SET_PRODUCTS_DATA", payload: products });
};

export const addNewProduct = (data) => async (dispatch) => {
  const { products } = await fetch("/api/product/create", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
  dispatch({ type: "SET_PRODUCTS_DATA", payload: products });
};

export const getProduct = (id) => async (dispatch) => {};
