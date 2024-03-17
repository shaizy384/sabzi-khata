import { LOGIN, NAVBAR_TITLE } from "../actionTypes"

export const navbarTitle = (data) => {
    return ({
        type: NAVBAR_TITLE,
        payload: data
    })
}

export const login = (data) => {
    return ({
        type: LOGIN,
        // payload: data
    })
}
