import {
  DASHBOARD_DATA,
  DASHBOARD_DATA_SUCCESS,
  DASHBOARD_DATA_FAILURE
} from "../actionTypes";

const initial_state = {
  data: null,
  loading: false,
  error: null,
};

const dashboardDataReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case DASHBOARD_DATA:
      return {
        ...state,
        loading: true,
      };
    case DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.data,
      };

    case DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return { ...state };
  }
};
export default dashboardDataReducer;
