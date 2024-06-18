import { BLOCK_CUSTOMER, GET_CUSTOMERS, GET_CUSTOMER_DETAILS, GET_CUSTOMER_WARNINGS, ORDER_DETAILS, SET_CUSTOMER_WARNINGS, CUSTOMER_PERSONAL_DETAILS, ADD_CUSTOMER, UPDATE_CUSTOMER, SET_CUSTOMER_STATUS, GET_SALES, ADD_SALE, ADD_CUSTOMER_TRANSACTION, GET_CUSTOMER_TRANSACTIONS, GET_CUSTOMER_STATS, ADD_CUSTOMER_CASH } from "../actionTypes"

export const getCustomerStats = () => {
    return ({
        type: GET_CUSTOMER_STATS
    })
}

export const getCustomers = () => {
    return ({
        type: GET_CUSTOMERS
    })
}
export const addCustomer = (data) => {
    return ({
        type: ADD_CUSTOMER,
        payload: data
    })
}
export const updateCustomer = (data) => {
    return ({
        type: UPDATE_CUSTOMER,
        payload: data
    })
}
export const setCustomerStatus = (data) => {
    return ({
        type: SET_CUSTOMER_STATUS,
        payload: data
    })
}


export const getSales = (data) => {
    return ({
        type: GET_SALES,
        payload: data
    })
}
export const addSale = (data) => {
    return ({
        type: ADD_SALE,
        payload: data
    })
}
export const getCustomerTransactions = () => {
    return ({
        type: GET_CUSTOMER_TRANSACTIONS
    })
}
export const addCustomerCash = (data) => {
    return ({
        type: ADD_CUSTOMER_CASH,
        payload: data
    })
}
// export const addCustomerTransaction = (data) => {
//     return ({
//         type: ADD_CUSTOMER_TRANSACTION,
//         payload: data
//     })
// }
export const getCustomerDetails = (data) => {
    return ({
        type: GET_CUSTOMER_DETAILS,
        payload: data
    })
}
// export const customerPersonalDetail = (data) => {
//     return ({
//         type: CUSTOMER_PERSONAL_DETAILS,
//         payload: data
//     })
// }
// export const orderDetails = (data) => {
//     return ({
//         type: ORDER_DETAILS,
//         payload: data
//     })
// }
// export const blockCustomer = (data) => {
//     return ({
//         type: BLOCK_CUSTOMER,
//         payload: data
//     })
// }
// export const setCustomerWarning = (data) => {
//     return ({
//         type: SET_CUSTOMER_WARNINGS,
//         payload: data
//     })
// }
// export const getCustomerWarning = (data) => {
//     return ({
//         type: GET_CUSTOMER_WARNINGS,
//         payload: data
//     })
// }