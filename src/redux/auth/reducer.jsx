import {
    LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS
} from '../actionTypes'

const initial_state = {
    token: localStorage.getItem('authToken'),
    isAuthenticated:
        localStorage.getItem('authToken') && localStorage.getItem('authToken') !== undefined
            ? true
            : false,
    message: null,
    error: null,
    loading: false,
    data: null,
}

const authReducer = (state = initial_state, { type, payload }) => {
    switch (type) {
        case SIGNUP:
            return {
                ...state,
                loading: true,
            }

        case SIGNUP_SUCCESS:
            localStorage.setItem('authToken', `Bearer ${payload.data.accessToken}`);
            return {
                ...state,
                loading: false,
                message: payload?.message,
                data: payload?.data,
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
            localStorage.setItem('authToken', `Bearer ${payload.data.accessToken}`);
            return {
                ...state,
                loading: false,
                message: payload?.message,
                data: payload.data,
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
            localStorage.removeItem('authToken');
            return {
                ...state,
                isAuthenticated: false,
                token: null
            };

        default: return { ...state };
    }

}
export default authReducer