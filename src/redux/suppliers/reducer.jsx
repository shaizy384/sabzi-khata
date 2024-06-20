import {
  GET_SUPPLIERS,
  GET_SUPPLIERS_SUCCESS,
  GET_SUPPLIERS_FAILURE,
  GET_SUPPLIER_DETAILS,
  GET_SUPPLIER_DETAILS_SUCCESS,
  GET_SUPPLIER_DETAILS_FAILURE,
  ADD_SUPPLIER,
  ADD_SUPPLIER_SUCCESS,
  ADD_SUPPLIER_FAILURE,
  UPDATE_SUPPLIER,
  UPDATE_SUPPLIER_SUCCESS,
  UPDATE_SUPPLIER_FAILURE,
  SET_SUPPLIER_STATUS,
  SET_SUPPLIER_STATUS_SUCCESS,
  SET_SUPPLIER_STATUS_FAILURE,
  ADD_PURCHASE,
  ADD_PURCHASE_SUCCESS,
  ADD_PURCHASE_FAILURE,
  GET_SUPPLIER_TRANSACTIONS,
  GET_SUPPLIER_TRANSACTIONS_SUCCESS,
  GET_SUPPLIER_TRANSACTIONS_FAILURE,
  ADD_SUPPLIER_CASH,
  ADD_SUPPLIER_CASH_SUCCESS,
  ADD_SUPPLIER_CASH_FAILURE
} from "../actionTypes";

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

  getSupplierDetails: {
    data: null,
    loading: false,
    error: null,
  },

  addSupplierCash: {
    data: null,
    loading: false,
    error: null,
  },
};

const suppliersReducer = (state = initial_state, { type, payload }) => {
  switch (type) {

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

    case ADD_SUPPLIER_CASH:
      return {
        ...state,
        addSupplierCash: {
          loading: true,
        }
      };
    case ADD_SUPPLIER_CASH_SUCCESS:
      return {
        ...state,
        addSupplierCash: {
          loading: false,
          data: payload.data,
        }
      };
    case ADD_SUPPLIER_CASH_FAILURE:
      return {
        ...state,
        addSupplierCash: {
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
