import { CLEAR_USER, GET_USER, GET_USER_FAILURE, GET_USER_SUCCESS } from "../actionTypes";

const initial_state = {
    getUser: {
        data: null,
        message: "",
        error: "",
        loading: false,
    },
}

const userReducer = (state = initial_state, { type, payload }) => {
    console.log("payload", payload)
    switch (type) {
        case GET_USER:
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    loading: true,
                }
            };
        case GET_USER_SUCCESS:
            console.log("GET_USER_DETAILS_SUCCESS", payload.data)
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    loading: false,
                    message: payload.message,
                    data: payload.data,
                    error: null
                }
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    loading: false,
                    error: payload,
                }
            };

        case CLEAR_USER:
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    data: null,
                }
            };
        default:
            return state;
    }
}
export default userReducer
