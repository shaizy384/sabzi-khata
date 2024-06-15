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
  ORDER_DETAILS,
  ADD_SUPPLIER,
  ADD_SUPPLIER_SUCCESS,
  ADD_SUPPLIER_FAILURE,
  UPDATE_SUPPLIER,
  UPDATE_SUPPLIER_SUCCESS,
  UPDATE_SUPPLIER_FAILURE,
  SET_SUPPLIER_STATUS,
  SET_SUPPLIER_STATUS_SUCCESS,
  SET_SUPPLIER_STATUS_FAILURE,
  GET_PURCHASE,
  GET_PURCHASE_SUCCESS,
  GET_PURCHASE_FAILURE,
  ADD_PURCHASE,
  ADD_PURCHASE_SUCCESS,
  ADD_PURCHASE_FAILURE,
  ADD_SUPPLIER_TRANSACTION,
  ADD_SUPPLIER_TRANSACTION_SUCCESS,
  ADD_SUPPLIER_TRANSACTION_FAILURE,
  GET_SUPPLIER_TRANSACTIONS,
  GET_SUPPLIER_TRANSACTIONS_SUCCESS,
  GET_SUPPLIER_TRANSACTIONS_FAILURE,
  GET_SUPPLIER_STATS,
  GET_SUPPLIER_STATS_SUCCESS,
  GET_SUPPLIER_STATS_FAILURE
} from "../actionTypes";
import { addSupplier, setSupplierStatus, updateSupplier } from "./action";
const initial_state = {
  getSuppliers: {
    data: null,
    loading: false,
    error: null,
  },
  addSupplier: {
    data: null,
    loading: false,
    error: null,
  },
  updateSupplier: {
    data: null,
    loading: false,
    error: null,
  },
  setSupplierStatus: {
    data: null,
    loading: false,
    error: null,
  },

  getPurchases: {
    data: null,
    loading: false,
    error: null,
  },
  addPurchase: {
    data: null,
    loading: false,
    error: null,
  },

  getSupplierTransactions: {
    data: null,
    loading: false,
    error: null,
  },
  addSupplierTransaction: {
    data: null,
    loading: false,
    error: null,
  },

  getSupplierStats: {
    data: null,
    loading: false,
    error: null,
  },

  getSupplierDetails: {
    data: null,
    loading: false,
    error: null,
  },
  // setSupplierBlock: {
  //   data: null,
  //   loading: false,
  //   error: null,
  // },
  // supplierPersonalDetails: {
  //   data: null,
  //   loading: false,
  //   error: null,
  // },
  // orderDetails: {
  //   data: null,
  //   loading: false,
  //   error: null,
  // },
};

const suppliersReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    // case SUPPLIER_PERSONAL_DETAILS:
    //   return {
    //     ...state,
    //     userPersonalDetails: {
    //       loading: false,
    //       data: payload,
    //     }
    //   };

    case GET_SUPPLIER_STATS:
      return {
        ...state,
        getSupplierStats: {
          loading: true,
        }
      };
    case GET_SUPPLIER_STATS_SUCCESS:
      console.log("payload ", payload);
      return {
        ...state,
        getSupplierStats: {
          loading: false,
          data: payload.data ? payload.data : [],
        }
      };
    case GET_SUPPLIER_STATS_FAILURE:
      return {
        ...state,
        getSupplierStats: {
          loading: false,
          error: payload,
        }
      };

    case GET_SUPPLIERS:
      return {
        ...state,
        getSuppliers: {
          loading: true,
        }
      };
    case GET_SUPPLIERS_SUCCESS:
      return {
        ...state,
        getSuppliers: {
          loading: false,
          data: payload.data ? payload.data : [],
        }
      };
    case GET_SUPPLIERS_FAILURE:
      return {
        ...state,
        getSuppliers: {
          loading: false,
          error: payload,
        }
      };

    case ADD_SUPPLIER:
      return {
        ...state,
        addSupplier: {
          loading: true,
        }
      };
    case ADD_SUPPLIER_SUCCESS:
      return {
        ...state,
        addSupplier: {
          loading: false,
          data: payload.data,
        }
      };
    case ADD_SUPPLIER_FAILURE:
      return {
        ...state,
        addSupplier: {
          loading: false,
          error: payload,
        }
      };

    case UPDATE_SUPPLIER:
      return {
        ...state,
        updateSupplier: {
          loading: true,
        }
      };
    case UPDATE_SUPPLIER_SUCCESS:
      return {
        ...state,
        updateSupplier: {
          loading: false,
          data: payload.data,
        }
      };
    case UPDATE_SUPPLIER_FAILURE:
      return {
        ...state,
        updateSupplier: {
          loading: false,
          error: payload,
        }
      };

    case SET_SUPPLIER_STATUS:
      return {
        ...state,
        setSupplierStatus: {
          loading: true,
        }
      };
    case SET_SUPPLIER_STATUS_SUCCESS:
      return {
        ...state,
        setSupplierStatus: {
          loading: false,
          data: payload.data,
        }
      };
    case SET_SUPPLIER_STATUS_FAILURE:
      return {
        ...state,
        setSupplierStatus: {
          loading: false,
          error: payload,
        }
      };


    case GET_SUPPLIER_TRANSACTIONS:
      return {
        ...state,
        getSupplierTransactions: {
          loading: true,
        }
      };
    case GET_SUPPLIER_TRANSACTIONS_SUCCESS:
      console.log("GET_SUPPLIER_TRANSACTIONS_SUCCESS: ", payload);
      return {
        ...state,
        getSupplierTransactions: {
          loading: false,
          data: payload.data ? payload.data : [],
        }
      };
    case GET_SUPPLIER_TRANSACTIONS_FAILURE:
      return {
        ...state,
        getSupplierTransactions: {
          loading: false,
          error: payload,
        }
      };

    case ADD_SUPPLIER_TRANSACTION:
      return {
        ...state,
        addSupplierTransaction: {
          loading: true,
        }
      };
    case ADD_SUPPLIER_TRANSACTION_SUCCESS:
      return {
        ...state,
        addSupplierTransaction: {
          loading: false,
          data: payload.data,
        }
      };
    case ADD_SUPPLIER_TRANSACTION_FAILURE:
      return {
        ...state,
        addSupplierTransaction: {
          loading: false,
          error: payload,
        }
      };

    case GET_SUPPLIER_DETAILS:
      return {
        ...state,
        getSupplierDetails: {
          loading: true,
        }
      };
    case GET_SUPPLIER_DETAILS_SUCCESS:
      return {
        ...state,
        getSupplierDetails: {
          loading: false,
          data: payload.data,
        }
      };
    case GET_SUPPLIER_DETAILS_FAILURE:
      return {
        ...state,
        getSupplierDetails: {
          loading: false,
          error: payload,
        }
      };

    // case BLOCK_SUPPLIER:
    //   return {
    //     ...state,
    //     setUserBlock: {
    //       loading: true,
    //     }
    //   };
    // case BLOCK_SUPPLIER_SUCCESS:
    //   return {
    //     ...state,
    //     setUserBlock: {
    //       loading: false,
    //       data: payload.data,
    //     }
    //   };
    // case BLOCK_SUPPLIER_FAILURE:
    //   return {
    //     ...state,
    //     setUserBlock: {
    //       loading: false,
    //       error: payload,
    //     }
    //   };


    case GET_PURCHASE:
      return {
        ...state,
        getPurchases: {
          loading: true,
        }
      };
    case GET_PURCHASE_SUCCESS:
      return {
        ...state,
        getPurchases: {
          loading: false,
          data: payload.data ? payload.data : [],
        }
      };
    case GET_PURCHASE_FAILURE:
      return {
        ...state,
        getPurchases: {
          loading: false,
          error: payload,
        }
      };

    case ADD_PURCHASE:
      return {
        ...state,
        addPurchase: {
          loading: true,
        }
      };
    case ADD_PURCHASE_SUCCESS:
      return {
        ...state,
        addPurchase: {
          loading: false,
          data: payload.data,
        }
      };
    case ADD_PURCHASE_FAILURE:
      return {
        ...state,
        addPurchase: {
          loading: false,
          error: payload,
        }
      };

    default:
      return { ...state };
  }
};
export default suppliersReducer;
