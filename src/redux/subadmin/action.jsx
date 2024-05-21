import { BLOCK_CUSTOMER, GET_SUB_ADMINS, GET_CUSTOMER_DETAILS, GET_CUSTOMER_WARNINGS, ORDER_DETAILS, SET_CUSTOMER_WARNINGS, CUSTOMER_PERSONAL_DETAILS, ADD_SUB_ADMIN, UPDATE_SUB_ADMIN, SET_SUB_ADMIN_STATUS, DELETE_SUB_ADMIN } from "../actionTypes"

export const getSubAdmins = () => {
    return ({
        type: GET_SUB_ADMINS
    })
}
export const addSubAdmin = (data) => {
    return ({
        type: ADD_SUB_ADMIN,
        payload: data
    })
}
export const updateSubAdmin = (data) => {
    return ({
        type: UPDATE_SUB_ADMIN,
        payload: data
    })
}
export const deleteSubAdmin = (data) => {
    return ({
        type: DELETE_SUB_ADMIN,
        payload: data
    })
}
export const setSubAdminStatus = (data) => {
    return ({
        type: SET_SUB_ADMIN_STATUS,
        payload: data
    })
}
export const getSubAdminDetails = (data) => {
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