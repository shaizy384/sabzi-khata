import { NAVBAR_TITLE } from '../actionTypes'

const initial_state = { title: 'null', auth: false }

const navbarTitleReducer = (state = initial_state, { type, payload }) => {
    switch (type) {
        case NAVBAR_TITLE:
            return { ...state, title: payload }

        default:
            return state;
    }
}
export default navbarTitleReducer