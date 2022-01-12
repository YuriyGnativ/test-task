export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS_DATA" });

  const { products } = await fetch("/api/product").then((res) => {
    console.log("res:", res);
    return res.json();
  });
  dispatch({ type: "SET_PRODUCTS_DATA", payload: products });
};

export const getProduct = (id) => async (dispatch) => {};
