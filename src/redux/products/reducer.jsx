import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  BLOCK_PRODUCT,
  BLOCK_PRODUCT_SUCCESS,
  BLOCK_PRODUCT_FAILURE,
} from "../actionTypes";

const initial_state = {
  getProducts: {
    data: null,
    loading: false,
    error: null,
  },
  getProductDetails: {
    data: null,
    loading: false,
    error: null,
  },
  setProductBlock: {
    data: null,
    loading: false,
    error: null,
  },
  productPersonalDetails: {
    data: null,
    loading: false,
    error: null,
  },
  orderDetails: {
    data: null,
    loading: false,
    error: null,
  },
};
const productsReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        getProducts: {
          loading: true,
        }
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        getProducts: {
          loading: false,
          data: payload.data,
        }
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        getProducts: {
          loading: false,
          error: payload,
        }
      };

    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        getProductDetails: {
          loading: true,
        }
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        getProductDetails: {
          loading: false,
          data: payload.data,
        }
      };

    case GET_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        getProductDetails: {
          loading: false,
          error: payload,
        }
      };

    case BLOCK_PRODUCT:
      return {
        ...state,
        setProductBlock: {
          loading: true,
        }
      };
    case BLOCK_PRODUCT_SUCCESS:
      return {
        ...state,
        setProductBlock: {
          loading: false,
          data: payload.data,
        }
      };
    case BLOCK_PRODUCT_FAILURE:
      return {
        ...state,
        setProductBlock: {
          loading: false,
          error: payload,
        }
      };

    default:
      return { ...state };
  }
};
export default productsReducer;
