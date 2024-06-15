import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actionTypes";
import { toast } from "react-toastify";
import { callApi } from "../../api/APIs";

function* watcherSignup(data) {
    let toastId = toast.loading("Loading...")
    let url = '/users/register';
    const Data = yield call(callApi, url, 'POST', data.payload);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: SIGNUP_SUCCESS, payload: Data.data });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: SIGNUP_FAILURE, payload: Data.data.error })
        // toast.error(Data.data.message)
    }
}

function* watcherLogin(data) {
    let toastId = toast.loading("Loading...")
    let url = '/users/login';
    console.log("watcherLogin: ", data);
    const Data = yield call(callApi, url, 'POST', data.payload);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: LOGIN_SUCCESS, payload: Data.data });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: LOGIN_FAILURE, payload: Data.data.error })
    }
}

export default function* watchLogin() {
    yield takeLatest(SIGNUP, watcherSignup)
    yield takeLatest(LOGIN, watcherLogin)
}