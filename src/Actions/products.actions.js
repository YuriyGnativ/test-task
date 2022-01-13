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
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
      return {
        error: true,
        message: "Something went wrong...",
      };
    });
  dispatch({ type: "SET_PRODUCTS_DATA", payload: products });
  return {
    error: false,
    message: "",
  };
};

export const deleteProduct = (id) => async (dispatch) => {
  const { products } = await fetch(`/api/product/${id}/delete`, {
    method: "delete",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    });
  dispatch({ type: "SET_PRODUCTS_DATA", payload: products });
};

export const editProductData = (data) => async (dispatch) => {
  const { products } = await fetch(`/api/product/${data.id}/edit`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        error: true,
        message: "Somethins went wrong...",
      };
    });
  dispatch({ type: "SET_PRODUCTS_DATA", payload: products });
  return {
    error: false,
    message: "",
  };
};

export const setSortKey = (key) => {
  return {
    type: "SET_SORT_KEY",
    payload: key,
  };
};
