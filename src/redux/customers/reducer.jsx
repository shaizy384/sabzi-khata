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
  ORDER_DETAILS,
  ADD_CUSTOMER,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
  SET_CUSTOMER_STATUS,
  SET_CUSTOMER_STATUS_SUCCESS,
  SET_CUSTOMER_STATUS_FAILURE,
  GET_SALES,
  GET_SALES_SUCCESS,
  GET_SALES_FAILURE,
  ADD_SALE,
  ADD_SALE_SUCCESS,
  ADD_SALE_FAILURE,
  GET_CUSTOMER_TRANSACTIONS,
  GET_CUSTOMER_TRANSACTIONS_SUCCESS,
  GET_CUSTOMER_TRANSACTIONS_FAILURE,
  ADD_CUSTOMER_TRANSACTION,
  ADD_CUSTOMER_TRANSACTION_SUCCESS,
  ADD_CUSTOMER_TRANSACTION_FAILURE,
  GET_CUSTOMER_STATS,
  GET_CUSTOMER_STATS_SUCCESS,
  GET_CUSTOMER_STATS_FAILURE,
  ADD_CUSTOMER_CASH,
  ADD_CUSTOMER_CASH_SUCCESS,
  ADD_CUSTOMER_CASH_FAILURE
} from "../actionTypes";
import { addCustomer, setCustomerStatus } from "./action";

const initial_state = {
  getCustomerStats: {
    data: null,
    loading: false,
    error: null,
  },
  getCustomers: {
    data: null,
    loading: false,
    error: null,
  },
  addCustomer: {
    data: null,
    loading: false,
    error: null,
  },
  updateCustomer: {
    data: null,
    loading: false,
    error: null,
  },
  setCustomerStatus: {
    data: null,
    loading: false,
    error: null,
  },

  getSales: {
    data: null,
    loading: false,
    error: null,
  },
  addSale: {
    data: null,
    loading: false,
    error: null,
  },

  addCustomerCash: {
    data: null,
    loading: false,
    error: null,
  },

  getCustomerTransactions: {
    data: null,
    loading: false,
    error: null,
  },
  addTransaction: {
    data: null,
    loading: false,
    error: null,
  },
  getCustomerDetails: {
    data: null,
    loading: false,
    error: null,
  },
  // getCustomerWarnings: {
  //   data: null,
  //   loading: false,
  //   error: null,
  // },
  // setCustomerBlock: {
  //   data: null,
  //   loading: false,
  //   error: null,
  // },
  // setCustomerWarning: {
  //   data: null,
  //   loading: false,
  //   error: null,
  // },
  // customerPersonalDetails: {
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

    case GET_CUSTOMER_STATS:
      return {
        ...state,
        getCustomerStats: {
          loading: true,
        }
      };
    case GET_CUSTOMER_STATS_SUCCESS:
      console.log("payload ", payload);
      return {
        ...state,
        getCustomerStats: {
          loading: false,
          data: payload.data ? payload.data : [],
        }
      };
    case GET_CUSTOMER_STATS_FAILURE:
      return {
        ...state,
        getCustomerStats: {
          loading: false,
          error: payload,
        }
      };

    case GET_CUSTOMERS:
      return {
        ...state,
        getCustomers: {
          loading: true,
        }
      };
    case GET_CUSTOMERS_SUCCESS:
      console.log("payload ", payload);
      return {
        ...state,
        getCustomers: {
          loading: false,
          data: payload.data ? payload.data : [],
        }
      };
    case GET_CUSTOMERS_FAILURE:
      return {
        ...state,
        getCustomers: {
          loading: false,
          error: payload,
        }
      };

    case ADD_CUSTOMER:
      return {
        ...state,
        addCustomer: {
          loading: true,
        }
      };
    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        addCustomer: {
          loading: false,
          data: payload.data,
        }
      };
    case ADD_CUSTOMER_FAILURE:
      return {
        ...state,
        addCustomer: {
          loading: false,
          error: payload,
        }
      };

    case UPDATE_CUSTOMER:
      return {
        ...state,
        updateCustomer: {
          loading: true,
        }
      };
    case UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        updateCustomer: {
          loading: false,
          data: payload.data,
        }
      };
    case UPDATE_CUSTOMER_FAILURE:
      return {
        ...state,
        updateCustomer: {
          loading: false,
          error: payload,
        }
      };

    case SET_CUSTOMER_STATUS:
      return {
        ...state,
        setCustomerStatus: {
          loading: true,
        }
      };
    case SET_CUSTOMER_STATUS_SUCCESS:
      return {
        ...state,
        setCustomerStatus: {
          loading: false,
          data: payload.data,
        }
      };
    case SET_CUSTOMER_STATUS_FAILURE:
      return {
        ...state,
        setCustomerStatus: {
          loading: false,
          error: payload,
        }
      };



    case ADD_CUSTOMER_CASH:
      return {
        ...state,
        addCustomerCash: {
          loading: true,
        }
      };
    case ADD_CUSTOMER_CASH_SUCCESS:
      return {
        ...state,
        addCustomerCash: {
          loading: false,
          data: payload.data,
        }
      };
    case ADD_CUSTOMER_CASH_FAILURE:
      return {
        ...state,
        addCustomerCash: {
          loading: false,
          error: payload,
        }
      };



    case GET_SALES:
      return {
        ...state,
        getSales: {
          loading: true,
        }
      };
    case GET_SALES_SUCCESS:
      return {
        ...state,
        getSales: {
          loading: false,
          data: payload.data ? payload.data : [],
        }
      };
    case GET_SALES_FAILURE:
      return {
        ...state,
        getSales: {
          loading: false,
          error: payload,
        }
      };

    case ADD_SALE:
      return {
        ...state,
        addSale: {
          loading: true,
        }
      };
    case ADD_SALE_SUCCESS:
      return {
        ...state,
        addSale: {
          loading: false,
          data: payload.data,
        }
      };
    case ADD_SALE_FAILURE:
      return {
        ...state,
        addSale: {
          loading: false,
          error: payload,
        }
      };

    case GET_CUSTOMER_TRANSACTIONS:
      return {
        ...state,
        getCustomerTransactions: {
          loading: true,
        }
      };
    case GET_CUSTOMER_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        getCustomerTransactions: {
          loading: false,
          data: payload.data ? payload.data : [],
        }
      };
    case GET_CUSTOMER_TRANSACTIONS_FAILURE:
      return {
        ...state,
        getCustomerTransactions: {
          loading: false,
          error: payload,
        }
      };

    case ADD_CUSTOMER_TRANSACTION:
      return {
        ...state,
        addTransaction: {
          loading: true,
        }
      };
    case ADD_CUSTOMER_TRANSACTION_SUCCESS:
      return {
        ...state,
        addTransaction: {
          loading: false,
          data: payload.data,
        }
      };
    case ADD_CUSTOMER_TRANSACTION_FAILURE:
      return {
        ...state,
        addTransaction: {
          loading: false,
          error: payload,
        }
      };

    case GET_CUSTOMER_DETAILS:
      return {
        ...state,
        getCustomerDetails: {
          loading: true,
        }
      };
    case GET_CUSTOMER_DETAILS_SUCCESS:
      return {
        ...state,
        getCustomerDetails: {
          loading: false,
          data: payload.data,
        }
      };
    case GET_CUSTOMER_DETAILS_FAILURE:
      return {
        ...state,
        getCustomerDetails: {
          loading: false,
          error: payload,
        }
      };

    // case GET_CUSTOMER_WARNINGS:
    //   return {
    //     ...state,
    //     getUserWarnings: {
    //       loading: true,
    //     }

    //   };
    // case GET_CUSTOMER_WARNINGS_SUCCESS:
    //   return {
    //     ...state,
    //     getUserWarnings: {
    //       loading: false,
    //       data: payload.data,
    //     }

    //   };

    // case GET_CUSTOMER_WARNINGS_FAILURE:
    //   return {
    //     ...state,
    //     getUserWarnings: {
    //       loading: false,
    //       error: payload,
    //     }

    //   };
    // case SET_CUSTOMER_WARNINGS:
    //   return {
    //     ...state,
    //     setUserWarning: {
    //       loading: true,
    //     }

    //   };
    // case SET_CUSTOMER_WARNINGS_SUCCESS:
    //   return {
    //     ...state,
    //     setUserWarning: {
    //       loading: false,
    //       data: payload.data,
    //     }

    //   };

    // case SET_CUSTOMER_WARNINGS_FAILURE:
    //   return {
    //     ...state,
    //     setUserWarning: {
    //       loading: false,
    //       error: payload,
    //     }

    //   };
    // case BLOCK_CUSTOMER:
    //   return {
    //     ...state,
    //     setUserBlock: {
    //       loading: true,
    //     }

    //   };
    // case BLOCK_CUSTOMER_SUCCESS:
    //   return {
    //     ...state,
    //     setUserBlock: {
    //       loading: false,
    //       data: payload.data,
    //     }

    //   };

    // case BLOCK_CUSTOMER_FAILURE:
    //   return {
    //     ...state,
    //     setUserBlock: {
    //       loading: false,
    //       error: payload,
    //     }
    // };

    default:
      return { ...state };
  }
};
export default customersReducer;
