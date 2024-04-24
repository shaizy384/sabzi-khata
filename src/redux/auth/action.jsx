import { LOGIN, LOGOUT, SIGNUP } from "../actionTypes"

export const signupUser = (data) => {
    return ({
        type: SIGNUP,
        payload: data
    })
}

export const loginUser = (data) => {
    return ({
        type: LOGIN,
        payload: data
    })
}

export const logout = () => {
    return ({
        type: LOGOUT,
    })
}
