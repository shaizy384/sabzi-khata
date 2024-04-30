import { SET_LANGUAGE } from "../actionTypes"

export const setLanguage = (payload) => {
    return ({
        type: SET_LANGUAGE,
        payload: payload
    })
}

