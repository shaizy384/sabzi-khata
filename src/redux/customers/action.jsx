import { BLOCK_CUSTOMER, GET_CUSTOMERS, GET_CUSTOMER_DETAILS, GET_CUSTOMER_WARNINGS, ORDER_DETAILS, SET_CUSTOMER_WARNINGS, CUSTOMER_PERSONAL_DETAILS } from "../actionTypes"

export const getCustomers = () => {
    return ({
        type: GET_CUSTOMERS
    })
}
export const getCustomerDetails = (data) => {
    return ({
        type: GET_CUSTOMER_DETAILS,
        payload: data
    })
}
export const customerPersonalDetail = (data) => {
    return ({
        type: CUSTOMER_PERSONAL_DETAILS,
        payload: data
    })
}
export const orderDetails = (data) => {
    return ({
        type: ORDER_DETAILS,
        payload: data
    })
}
export const blockCustomer = (data) => {
    return ({
        type: BLOCK_CUSTOMER,
        payload: data
    })
}
export const setCustomerWarning = (data) => {
    return ({
        type: SET_CUSTOMER_WARNINGS,
        payload: data
    })
}
export const getCustomerWarning = (data) => {
    return ({
        type: GET_CUSTOMER_WARNINGS,
        payload: data
    })
}