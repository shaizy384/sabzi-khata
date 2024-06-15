import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";
import { toast } from "react-toastify";
import { GET_USER, GET_USER_FAILURE, GET_USER_SUCCESS, LOGOUT } from "../actionTypes";

function* watcherGetUser() {
    let url = '/users/getUser';
    const Data = yield call(callApi, url, 'GET', '', true);
    // console.log("..................................", Data.data)
    if (Data.status === 200 || Data.status === 201) {
        console.log("Data.data", Data)
        yield put({ type: GET_USER_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_USER_FAILURE, payload: Data.data.error })
        toast.error(Data.data.message)
        yield put({ type: LOGOUT })
    }
}

export default function* watchUser() {
    yield takeLatest(GET_USER, watcherGetUser)
}