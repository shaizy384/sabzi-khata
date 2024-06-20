import {
  GET_SUB_ADMINS,
  GET_SUB_ADMINS_SUCCESS,
  GET_SUB_ADMINS_FAILURE,
  ADD_SUB_ADMIN,
  ADD_SUB_ADMIN_SUCCESS,
  ADD_SUB_ADMIN_FAILURE,
  UPDATE_SUB_ADMIN,
  UPDATE_SUB_ADMIN_SUCCESS,
  UPDATE_SUB_ADMIN_FAILURE,
  // SET_SUB_ADMIN_STATUS,
  // SET_SUB_ADMIN_STATUS_SUCCESS,
  // SET_SUB_ADMIN_STATUS_FAILURE,
  DELETE_SUB_ADMIN,
  DELETE_SUB_ADMIN_SUCCESS,
  DELETE_SUB_ADMIN_FAILURE,
  UPDATE_SUB_ADMIN_PASSWORD,
  UPDATE_SUB_ADMIN_PASSWORD_SUCCESS,
  UPDATE_SUB_ADMIN_PASSWORD_FAILURE
} from "../actionTypes";

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
  updateSubAdminPassword: {
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
  }
};

const subAdminsReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
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

    case UPDATE_SUB_ADMIN_PASSWORD:
      return {
        ...state,
        updateSubAdminPassword: {
          loading: true,
        }
      };
    case UPDATE_SUB_ADMIN_PASSWORD_SUCCESS:
      return {
        ...state,
        updateSubAdminPassword: {
          loading: false,
          data: payload.data,
        }
      };
    case UPDATE_SUB_ADMIN_PASSWORD_FAILURE:
      return {
        ...state,
        updateSubAdminPassword: {
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

    // case SET_SUB_ADMIN_STATUS:
    //   return {
    //     ...state,
    //     setSubAdminStatus: {
    //       loading: true,
    //     }
    //   };
    // case SET_SUB_ADMIN_STATUS_SUCCESS:
    //   return {
    //     ...state,
    //     setSubAdminStatus: {
    //       loading: false,
    //       data: payload.data,
    //     }
    //   };
    // case SET_SUB_ADMIN_STATUS_FAILURE:
    //   return {
    //     ...state,
    //     setSubAdminStatus: {
    //       loading: false,
    //       error: payload,
    //     }
    //   };

    default:
      return { ...state };
  }
};
export default subAdminsReducer;
