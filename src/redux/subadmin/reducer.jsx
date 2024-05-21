import {
  GET_SUB_ADMINS,
  GET_SUB_ADMINS_SUCCESS,
  GET_SUB_ADMINS_FAILURE,
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
  ORDER_DETAILS,
  ADD_SUB_ADMIN,
  ADD_SUB_ADMIN_SUCCESS,
  ADD_SUB_ADMIN_FAILURE,
  UPDATE_SUB_ADMIN,
  UPDATE_SUB_ADMIN_SUCCESS,
  UPDATE_SUB_ADMIN_FAILURE,
  SET_SUB_ADMIN_STATUS,
  SET_SUB_ADMIN_STATUS_SUCCESS,
  SET_SUB_ADMIN_STATUS_FAILURE,
  DELETE_SUB_ADMIN,
  DELETE_SUB_ADMIN_SUCCESS,
  DELETE_SUB_ADMIN_FAILURE
} from "../actionTypes";
import { getSubAdmins } from "./action";

const initial_state = {
  getSubAdmins: {
    data: null,
    loading: false,
    error: null,
  },
  addSubAdmin: {
    data: null,
    loading: false,
    error: null,
  },
  updateSubAdmin: {
    data: null,
    loading: false,
    error: null,
  },
  deleteSubAdmin: {
    data: null,
    loading: false,
    error: null,
  },
  setSubAdminStatus: {
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

const subAdminsReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    // case CUSTOMER_PERSONAL_DETAILS:
    //   return {
    //     ...state,
    //     userPersonalDetails: {
    //       loading: false,
    //       data: payload,
    //     }
    //   };
    // case ORDER_DETAILS:
    //   return {
    //     ...state,
    //     orderDetails: {
    //       data: payload,
    //       loading: false,
    //     },
    //   }
    case GET_SUB_ADMINS:
      return {
        ...state,
        getSubAdmins: {
          loading: true,
        }
      };
    case GET_SUB_ADMINS_SUCCESS:
      return {
        ...state,
        getSubAdmins: {
          loading: false,
          data: payload.data ? payload.data : [],
        }
      };
    case GET_SUB_ADMINS_FAILURE:
      return {
        ...state,
        getSubAdmins: {
          loading: false,
          error: payload,
        }
      };


    case ADD_SUB_ADMIN:
      return {
        ...state,
        addSubAdmin: {
          loading: true,
        }
      };
    case ADD_SUB_ADMIN_SUCCESS:
      return {
        ...state,
        addSubAdmin: {
          loading: false,
          data: payload.data,
        }
      };
    case ADD_SUB_ADMIN_FAILURE:
      return {
        ...state,
        addSubAdmin: {
          loading: false,
          error: payload,
        }
      };

    case UPDATE_SUB_ADMIN:
      return {
        ...state,
        updateSubAdmin: {
          loading: true,
        }
      };
    case UPDATE_SUB_ADMIN_SUCCESS:
      return {
        ...state,
        updateSubAdmin: {
          loading: false,
          data: payload.data,
        }
      };
    case UPDATE_SUB_ADMIN_FAILURE:
      return {
        ...state,
        updateSubAdmin: {
          loading: false,
          error: payload,
        }
      };

    case DELETE_SUB_ADMIN:
      return {
        ...state,
        deleteSubAdmin: {
          loading: true,
        }
      };
    case DELETE_SUB_ADMIN_SUCCESS:
      return {
        ...state,
        deleteSubAdmin: {
          loading: false,
          data: payload.data,
        }
      };
    case DELETE_SUB_ADMIN_FAILURE:
      return {
        ...state,
        deleteSubAdmin: {
          loading: false,
          error: payload,
        }
      };

    case SET_SUB_ADMIN_STATUS:
      return {
        ...state,
        setSubAdminStatus: {
          loading: true,
        }
      };
    case SET_SUB_ADMIN_STATUS_SUCCESS:
      return {
        ...state,
        setSubAdminStatus: {
          loading: false,
          data: payload.data,
        }
      };
    case SET_SUB_ADMIN_STATUS_FAILURE:
      return {
        ...state,
        setSubAdminStatus: {
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
export default subAdminsReducer;
