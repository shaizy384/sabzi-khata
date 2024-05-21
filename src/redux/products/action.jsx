import { GET_PRODUCTS, GET_PRODUCT_DETAILS, BLOCK_PRODUCT, ADD_PRODUCT, SET_PRODUCT_STATUS, UPDATE_PRODUCT } from "../actionTypes"

export const getProducts = () => {
    return ({
        type: GET_PRODUCTS
    })
}
export const addProduct = (data) => {
    return ({
        type: ADD_PRODUCT,
        payload: data
    })
}
export const updateProduct = (data) => {
    return ({
        type: UPDATE_PRODUCT,
        payload: data
    })
}
export const setProductStatus = (data) => {
    return ({
        type: SET_PRODUCT_STATUS,
        payload: data
    })
}
export const getProductDetails = (data) => {
    return ({
        type: GET_PRODUCT_DETAILS,
        payload: data
    })
}
export const blockProduct = (data) => {
    return ({
        type: BLOCK_PRODUCT,
        payload: data
    })
}