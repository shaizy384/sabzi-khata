import { GET_PRODUCTS, ADD_PRODUCT, SET_PRODUCT_STATUS, UPDATE_PRODUCT } from "../actionTypes"

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
    console.log("data.payload status: ", data);
    return ({
        type: SET_PRODUCT_STATUS,
        payload: data
    })
}