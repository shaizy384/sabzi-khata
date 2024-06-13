import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";
import { toast } from "react-toastify";
import { GET_USER, GET_USER_FAILURE, GET_USER_SUCCESS } from "../actionTypes";

function* watcherGetUser() {
    let url = '/auth/get-admin';
    const Data = yield call(callApi, url, 'GET', '', true);
    // console.log("..................................", Data.data)
    if (Data.status) {
        console.log("Data.data", Data.data)
        yield put({ type: GET_USER_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_USER_FAILURE, payload: Data.data.error })
        toast.error(Data.data.message)
    }
}

export default function* watchUser() {
    yield takeLatest(GET_USER, watcherGetUser)
}