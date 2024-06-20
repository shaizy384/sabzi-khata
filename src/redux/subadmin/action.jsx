import { GET_SUB_ADMINS, ADD_SUB_ADMIN, UPDATE_SUB_ADMIN, SET_SUB_ADMIN_STATUS, DELETE_SUB_ADMIN, UPDATE_SUB_ADMIN_PASSWORD } from "../actionTypes"

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
export const updateSubAdminPassword = (data) => {
    return ({
        type: UPDATE_SUB_ADMIN_PASSWORD,
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
// export const getSubAdminDetails = (data) => {
//     return ({
//         type: GET_CUSTOMER_DETAILS,
//         payload: data
//     })
// }