import { SET_LANGUAGE } from "../actionTypes";
const initial_state = {
  language: localStorage.getItem('i18nextLng')
};

const localizationReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: payload
      };

    default:
      return { ...state };
  }
};
export default localizationReducer;
