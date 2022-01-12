export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS_DATA" });

  const { products } = await fetch("/api/product").then((res) => {
    return res.json();
  });
  dispatch({ type: "SET_PRODUCTS_DATA", payload: products });
};

export const addNewProduct = (data) => async (dispatch) => {
  try {
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
        return {
          error: true,
          message: "something went wrong",
        };
      });
    dispatch({ type: "SET_PRODUCTS_DATA", payload: products });
    return {
      error: false,
      message: null,
    };
  } catch (error) {
    return {
      error: true,
      message: "error",
    };
  }
};

export const getProduct = (id) => async (dispatch) => {};
