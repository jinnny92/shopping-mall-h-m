import { productActions } from "../reducers/productReducer";
function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/jinnny92/HNM/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    //dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    dispatch(productActions.getAllProducts({ data }));
  };
}

export const productAction = { getProducts };
