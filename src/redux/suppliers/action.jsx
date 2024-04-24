import { GET_SUPPLIERS, GET_SUPPLIER_DETAILS, BLOCK_SUPPLIER } from "../actionTypes"

export const getSuppliers = () => {
    return ({
        type: GET_SUPPLIERS
    })
}
export const getSupplierDetails = (data) => {
    return ({
        type: GET_SUPPLIER_DETAILS,
        payload: data
    })
}
export const blockSupplier = (data) => {
    return ({
        type: BLOCK_SUPPLIER,
        payload: data
    })
}