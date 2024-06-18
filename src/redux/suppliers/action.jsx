import { GET_SUPPLIERS, GET_SUPPLIER_DETAILS, BLOCK_SUPPLIER, ADD_CUSTOMER, ADD_SUPPLIER, UPDATE_SUPPLIER, SET_SUPPLIER_STATUS, GET_SALES, ADD_SALE, GET_PURCHASE, ADD_PURCHASE, GET_SUPPLIER_TRANSACTIONS, ADD_SUPPLIER_TRANSACTION, GET_SUPPLIER_STATS, ADD_SUPPLIER_CASH } from "../actionTypes"

export const getSupplierStats = () => {
    return ({
        type: GET_SUPPLIER_STATS
    })
}

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


export const getPurchases = (data) => {
    return ({
        type: GET_PURCHASE,
        payload: data
    })
}
export const addPurchase = (data) => {
    return ({
        type: ADD_PURCHASE,
        payload: data
    })
}
export const getSupplierTransactions = (data) => {
    return ({
        type: GET_SUPPLIER_TRANSACTIONS,
        payload: data
    })
}
export const addSupplierTransaction = (data) => {
    return ({
        type: ADD_SUPPLIER_TRANSACTION,
        payload: data
    })
}
export const getSupplierDetails = (data) => {
    return ({
        type: GET_SUPPLIER_DETAILS,
        payload: data
    })
}


export const addSupplierCash = (data) => {
    return ({
        type: ADD_SUPPLIER_CASH,
        payload: data
    })
}
// export const blockSupplier = (data) => {
//     return ({
//         type: BLOCK_SUPPLIER,
//         payload: data
//     })
// }