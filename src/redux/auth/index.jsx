import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actionTypes";
import { toast } from "react-toastify";
import { callApi } from "../../api/APIs";

function* watcherSignup(data) {
    let toastId = toast.loading("Loading...")
    let url = '/v2/company/auth/Company_auth_controller/signUp';
    const Data = yield call(callApi, url, 'POST', data.payload);
    if (Data.status === 200) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: SIGNUP_SUCCESS, payload: Data.data });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, closeButton: true })
        yield put({ type: SIGNUP_FAILURE, payload: Data.data.error })
        // toast.error(Data.data.message)
    }
}

function* watcherLogin(data) {
    let url = '/v2/company/auth/Company_auth_controller/login';
    const Data = yield call(callApi, url, 'POST', data.payload);
    if (Data.status === 200) {
        yield put({ type: LOGIN_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: LOGIN_FAILURE, payload: Data.data.error })
        toast.error(Data.data.message)
    }
}

export default function* watchLogin() {
    yield takeLatest(SIGNUP, watcherSignup)
    yield takeLatest(LOGIN, watcherLogin)
}