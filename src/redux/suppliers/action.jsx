import { GET_SUPPLIERS, GET_SUPPLIER_DETAILS, BLOCK_SUPPLIER, ADD_CUSTOMER, ADD_SUPPLIER, UPDATE_SUPPLIER, SET_SUPPLIER_STATUS, GET_SALES, ADD_SALE, GET_PURCHASE, ADD_PURCHASE } from "../actionTypes"

export const getSuppliers = () => {
    return ({
        type: GET_SUPPLIERS
    })
}
export const addSupplier = (data) => {
    return ({
        type: ADD_SUPPLIER,
        payload: data
    })
}
export const updateSupplier = (data) => {
    return ({
        type: UPDATE_SUPPLIER,
        payload: data
    })
}
export const setSupplierStatus = (data) => {
    return ({
        type: SET_SUPPLIER_STATUS,
        payload: data
    })
}


export const getPurchases = () => {
    return ({
        type: GET_PURCHASE
    })
}
export const addPurchase = (data) => {
    return ({
        type: ADD_PURCHASE,
        payload: data
    })
}
// export const getSupplierDetails = (data) => {
//     return ({
//         type: GET_SUPPLIER_DETAILS,
//         payload: data
//     })
// }
// export const blockSupplier = (data) => {
//     return ({
//         type: BLOCK_SUPPLIER,
//         payload: data
//     })
// }