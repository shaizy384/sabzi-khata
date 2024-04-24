import {
  GET_CUSTOMERS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILURE,
  GET_CUSTOMER_DETAILS,
  GET_CUSTOMER_DETAILS_SUCCESS,
  GET_CUSTOMER_DETAILS_FAILURE,
  GET_CUSTOMER_WARNINGS,
  GET_CUSTOMER_WARNINGS_SUCCESS,
  GET_CUSTOMER_WARNINGS_FAILURE,
  SET_CUSTOMER_WARNINGS,
  SET_CUSTOMER_WARNINGS_SUCCESS,
  SET_CUSTOMER_WARNINGS_FAILURE,
  BLOCK_CUSTOMER,
  BLOCK_CUSTOMER_SUCCESS,
  BLOCK_CUSTOMER_FAILURE,
  CUSTOMER_PERSONAL_DETAILS,
  ORDER_DETAILS
} from "../actionTypes";

const initial_state = {
  getCustomers: {
    data: null,
    loading: false,
    error: null,
  },
  getCustomerDetails: {
    data: null,
    loading: false,
    error: null,
  },
  getCustomerWarnings: {
    data: null,
    loading: false,
    error: null,
  },
  setCustomerBlock: {
    data: null,
    loading: false,
    error: null,
  },
  setCustomerWarning: {
    data: null,
    loading: false,
    error: null,
  },
  customerPersonalDetails: {
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

const customersReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case CUSTOMER_PERSONAL_DETAILS:
      return {
        ...state,
        userPersonalDetails: {
          loading: false,
          data: payload,
        }
      };
    case ORDER_DETAILS:
      return {
        ...state,
        orderDetails: {
          data: payload,
          loading: false,
        },
      }
    case GET_CUSTOMERS:
      return {
        ...state,
        getUsers: {
          loading: true,
        }
      };
    case GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        getUsers: {
          loading: false,
          data: payload.data,
        }
      };

    case GET_CUSTOMERS_FAILURE:
      return {
        ...state,
        getUsers: {
          loading: false,
          error: payload,
        }

      };
    case GET_CUSTOMER_DETAILS:
      return {
        ...state,
        getUserDetails: {
          loading: true,
        }

      };
    case GET_CUSTOMER_DETAILS_SUCCESS:
      return {
        ...state,
        getUserDetails: {
          loading: false,
          data: payload.data,
        }

      };

    case GET_CUSTOMER_DETAILS_FAILURE:
      return {
        ...state,
        getUserDetails: {
          loading: false,
          error: payload,
        }

      };
    case GET_CUSTOMER_WARNINGS:
      return {
        ...state,
        getUserWarnings: {
          loading: true,
        }

      };
    case GET_CUSTOMER_WARNINGS_SUCCESS:
      return {
        ...state,
        getUserWarnings: {
          loading: false,
          data: payload.data,
        }

      };

    case GET_CUSTOMER_WARNINGS_FAILURE:
      return {
        ...state,
        getUserWarnings: {
          loading: false,
          error: payload,
        }

      };
    case SET_CUSTOMER_WARNINGS:
      return {
        ...state,
        setUserWarning: {
          loading: true,
        }

      };
    case SET_CUSTOMER_WARNINGS_SUCCESS:
      return {
        ...state,
        setUserWarning: {
          loading: false,
          data: payload.data,
        }

      };

    case SET_CUSTOMER_WARNINGS_FAILURE:
      return {
        ...state,
        setUserWarning: {
          loading: false,
          error: payload,
        }

      };
    case BLOCK_CUSTOMER:
      return {
        ...state,
        setUserBlock: {
          loading: true,
        }

      };
    case BLOCK_CUSTOMER_SUCCESS:
      return {
        ...state,
        setUserBlock: {
          loading: false,
          data: payload.data,
        }

      };

    case BLOCK_CUSTOMER_FAILURE:
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
export default customersReducer;
