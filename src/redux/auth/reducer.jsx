import {
    LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS
} from '../actionTypes'

const initial_state = {
    token: localStorage.getItem('cAuthToken'),
    isAuthenticated:
        localStorage.getItem('cAuthToken') && localStorage.getItem('cAuthToken') !== undefined
            ? true
            : false,
    message: null,
    error: null,
    loading: false,
}

const companyAuthReducer = (state = initial_state, { type, payload }) => {

    switch (type) {
        case SIGNUP:
            return {
                ...state,
                loading: true,
            }

        case SIGNUP_SUCCESS:
            localStorage.setItem('cAuthToken', payload.token);
            return {
                ...state,
                loading: false,
                message: payload?.message,
                isAuthenticated: true,
                error: null
            }

        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        case LOGIN:
            return {
                ...state,
                loading: true,
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('cAuthToken', payload.token);
            return {
                ...state,
                loading: false,
                message: payload?.message,
                isAuthenticated: true,
                error: null
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        case LOGOUT:
            localStorage.removeItem('cAuthToken');
            return {
                ...state,
                isAuthenticated: false,
            };

        default: return { ...state };
    }

}
export default companyAuthReducer