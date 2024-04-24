import {
  GET_SUPPLIERS,
  GET_SUPPLIERS_SUCCESS,
  GET_SUPPLIERS_FAILURE,
  GET_SUPPLIER_DETAILS,
  GET_SUPPLIER_DETAILS_SUCCESS,
  GET_SUPPLIER_DETAILS_FAILURE,
  GET_SUPPLIER_WARNINGS,
  GET_SUPPLIER_WARNINGS_SUCCESS,
  GET_SUPPLIER_WARNINGS_FAILURE,
  SET_SUPPLIER_WARNINGS,
  SET_SUPPLIER_WARNINGS_SUCCESS,
  SET_SUPPLIER_WARNINGS_FAILURE,
  BLOCK_SUPPLIER,
  BLOCK_SUPPLIER_SUCCESS,
  BLOCK_SUPPLIER_FAILURE,
  SUPPLIER_PERSONAL_DETAILS,
  ORDER_DETAILS
} from "../actionTypes";
const initial_state = {
  getSuppliers: {
    data: null,
    loading: false,
    error: null,
  },
  getSupplierDetails: {
    data: null,
    loading: false,
    error: null,
  },
  setSupplierBlock: {
    data: null,
    loading: false,
    error: null,
  },
  supplierPersonalDetails: {
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

const suppliersReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case SUPPLIER_PERSONAL_DETAILS:
      return {
        ...state,
        userPersonalDetails: {
          loading: false,
          data: payload,
        }
      };

    case GET_SUPPLIERS:
      return {
        ...state,
        getUsers: {
          loading: true,
        }
      };
    case GET_SUPPLIERS_SUCCESS:
      return {
        ...state,
        getUsers: {
          loading: false,
          data: payload.data,
        }
      };
    case GET_SUPPLIERS_FAILURE:
      return {
        ...state,
        getUsers: {
          loading: false,
          error: payload,
        }
      };

    case GET_SUPPLIER_DETAILS:
      return {
        ...state,
        getUserDetails: {
          loading: true,
        }
      };
    case GET_SUPPLIER_DETAILS_SUCCESS:
      return {
        ...state,
        getUserDetails: {
          loading: false,
          data: payload.data,
        }
      };

    case GET_SUPPLIER_DETAILS_FAILURE:
      return {
        ...state,
        getUserDetails: {
          loading: false,
          error: payload,
        }
      };

    case BLOCK_SUPPLIER:
      return {
        ...state,
        setUserBlock: {
          loading: true,
        }
      };
    case BLOCK_SUPPLIER_SUCCESS:
      return {
        ...state,
        setUserBlock: {
          loading: false,
          data: payload.data,
        }
      };
    case BLOCK_SUPPLIER_FAILURE:
      return {
        ...state,
        setUserBlock: {
          loading: false,
          error: payload,
        }
      };

    default:
      return { ...state };
  }
};
export default suppliersReducer;
