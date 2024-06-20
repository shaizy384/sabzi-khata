import { GET_CUSTOMERS, GET_CUSTOMER_DETAILS, ADD_CUSTOMER, UPDATE_CUSTOMER, SET_CUSTOMER_STATUS, ADD_SALE, GET_CUSTOMER_TRANSACTIONS, ADD_CUSTOMER_CASH } from "../actionTypes"

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
export const getCustomerDetails = (data) => {
    return ({
        type: GET_CUSTOMER_DETAILS,
        payload: data
    })
}