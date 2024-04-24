import { GET_PRODUCTS, GET_PRODUCT_DETAILS, BLOCK_PRODUCT } from "../actionTypes"

export const getProducts = () => {
    return ({
        type: GET_PRODUCTS
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