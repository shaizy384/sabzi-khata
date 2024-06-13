import { CLEAR_USER, GET_USER } from "../actionTypes"

export const getUser = () => {
    return ({
        type: GET_USER,
    })
}

export const clearUser = () => {
    return ({
        type: CLEAR_USER,
    })
}