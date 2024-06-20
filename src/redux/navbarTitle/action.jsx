import { NAVBAR_TITLE } from "../actionTypes"

export const navbarTitle = (data) => {
    return ({
        type: NAVBAR_TITLE,
        payload: data
    })
}