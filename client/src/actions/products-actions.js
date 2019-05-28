import { RSAA } from "redux-api-middleware";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_SUCCESS";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";

const PRODUCT_REST_API__BASE_URL = "http://127.0.0.1:3001";

export const fetchProducts = () => ({
  [RSAA]: {
    types: [FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE],
    endpoint: `${PRODUCT_REST_API__BASE_URL}/products`,
    method: "GET"
  }
});

export const addProduct = data => ({
  [RSAA]: {
    types: [ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE],
    endpoint: `${PRODUCT_REST_API__BASE_URL}/products`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }
});

export const deletePost = id => ({
  [RSAA]: {
    types: [DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE],
    endpoint: `${PRODUCT_REST_API__BASE_URL}/product/${id}`,
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  }
});
