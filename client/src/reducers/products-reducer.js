import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE
} from "../actions/products-actions";

const INITIAL_STATE = {
  productsList: { products: [], error: null, loading: false }
};

export default (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productsList: { products: [], error: null, loading: true }
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsList: {
          products: action.payload.products,
          error: null,
          loading: false
        }
      };
    case FETCH_PRODUCTS_FAILURE:
      error = action.payload.data || { message: action.payload.message };
      return {
        ...state,
        productsList: { products: [], error: error, loading: false }
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        productsList: {
          products: [action.payload, ...state.productsList.products],
          error: null,
          loading: false
        }
      };
    case DELETE_PRODUCT_SUCCESS:
      const products = state.productsList.products.filter(product => {
        return product.id !== action.payload.id;
      });
      return {
        ...state,
        productsList: { products: products, error: null, loading: false }
      };
    default:
      return state;
  }
};
