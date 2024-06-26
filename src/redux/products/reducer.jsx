import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  SET_PRODUCT_STATUS,
  SET_PRODUCT_STATUS_SUCCESS,
  SET_PRODUCT_STATUS_FAILURE,
} from "../actionTypes";

const initial_state = {
  getProducts: {
    data: null,
    loading: false,
    error: null,
  },
  updateProduct: {
    data: null,
    loading: false,
    error: null,
  },
  setProductStatus: {
    data: null,
    loading: false,
    error: null,
  },
  addProduct: {
    data: null,
    loading: false,
    error: null,
  }
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
          data: payload.data ? payload.data : [],
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

    case ADD_PRODUCT:
      return {
        ...state,
        addProduct: {
          loading: true,
        }
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProduct: {
          loading: false,
          data: payload.data,
        }
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        addProduct: {
          loading: false,
          error: payload,
        }
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct: {
          loading: true,
        }
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        updateProduct: {
          loading: false,
          data: payload.data,
        }
      };
    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        updateProduct: {
          loading: false,
          error: payload,
        }
      };

    case SET_PRODUCT_STATUS:
      return {
        ...state,
        setProductStatus: {
          loading: true,
        }
      };
    case SET_PRODUCT_STATUS_SUCCESS:
      return {
        ...state,
        setProductStatus: {
          loading: false,
          data: payload.data,
        }
      };
    case SET_PRODUCT_STATUS_FAILURE:
      return {
        ...state,
        setProductStatus: {
          loading: false,
          error: payload,
        }
      };

    default:
      return { ...state };
  }
};
export default productsReducer;
