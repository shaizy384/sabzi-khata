import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";
import { toast } from 'react-toastify';
import { ADD_SUB_ADMIN, ADD_SUB_ADMIN_FAILURE, ADD_SUB_ADMIN_SUCCESS, DELETE_SUB_ADMIN, DELETE_SUB_ADMIN_FAILURE, DELETE_SUB_ADMIN_SUCCESS, GET_SUB_ADMINS, GET_SUB_ADMINS_FAILURE, GET_SUB_ADMINS_SUCCESS, SET_SUB_ADMIN_STATUS, SET_SUB_ADMIN_STATUS_FAILURE, SET_SUB_ADMIN_STATUS_SUCCESS, UPDATE_SUB_ADMIN, UPDATE_SUB_ADMIN_FAILURE, UPDATE_SUB_ADMIN_PASSWORD, UPDATE_SUB_ADMIN_PASSWORD_FAILURE, UPDATE_SUB_ADMIN_PASSWORD_SUCCESS, UPDATE_SUB_ADMIN_SUCCESS } from "../actionTypes";

function* watcherGetSubAdmins() {
    let url = '/subadmins/getSubadmins';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_SUB_ADMINS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_SUB_ADMINS_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddSubAdmin(data) {
    let toastId = toast.loading("Loading...")
    let url = '/subadmins/addSubadmin';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_SUB_ADMIN_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUB_ADMINS });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_SUB_ADMIN_FAILURE, payload: Data.data.error })
    }
}

function* watcherUpdateSubAdmin(data) {
    let toastId = toast.loading("Loading...")
    let url = '/subadmins/updateSubadmin';
    const Data = yield call(callApi, url, 'PATCH', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: UPDATE_SUB_ADMIN_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUB_ADMINS });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: UPDATE_SUB_ADMIN_FAILURE, payload: Data.data.error })
    }
}

function* watcherUpdateSubAdminPassword(data) {
    let toastId = toast.loading("Loading...")
    let url = '/subadmins/updateSubadminPassword';
    const Data = yield call(callApi, url, 'PATCH', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: UPDATE_SUB_ADMIN_PASSWORD_SUCCESS, payload: Data.data });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: UPDATE_SUB_ADMIN_PASSWORD_FAILURE, payload: Data.data.error })
    }
}

function* watcherDeleteSubAdmin(data) {
    let toastId = toast.loading("Loading...")
    let url = `/subadmins/deleteSubadmin/${data.payload}`;
    const Data = yield call(callApi, url, 'DELETE', '', true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: DELETE_SUB_ADMIN_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUB_ADMINS });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: DELETE_SUB_ADMIN_FAILURE, payload: Data.data.error })
    }
}

function* watcherSubAdminStatus(data) {
    let url = '/add-product';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: SET_SUB_ADMIN_STATUS_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUB_ADMINS });
    }
    else {
        yield put({ type: SET_SUB_ADMIN_STATUS_FAILURE, payload: Data.data.error })
    }
}
// function* watcherGetSubAdminDetails(data) {
//     let url = `/admin/SubAdmin_controller/getSubAdminDetail?SubAdmin_id=${data.payload}`;
//     const Data = yield call(callApi, url, 'GET', '', true);
//     if (Data.status === 200 || Data.status === 201) {
//         yield put({ type: GET_SUB_ADMIN_DETAILS_SUCCESS, payload: Data.data });
//     }
//     else {
//         yield put({ type: GET_SUB_ADMIN_DETAILS_FAILURE, payload: Data.data.error })
//     }
// }

export default function* watchSubAdmins() {
    yield takeLatest(GET_SUB_ADMINS, watcherGetSubAdmins)
    yield takeLatest(ADD_SUB_ADMIN, watcherAddSubAdmin)
    yield takeLatest(UPDATE_SUB_ADMIN, watcherUpdateSubAdmin)
    yield takeLatest(UPDATE_SUB_ADMIN_PASSWORD, watcherUpdateSubAdminPassword)
    yield takeLatest(DELETE_SUB_ADMIN, watcherDeleteSubAdmin)
    yield takeLatest(SET_SUB_ADMIN_STATUS, watcherSubAdminStatus)
    // yield takeLatest(GET_SUB_ADMIN_DETAILS, watcherGetSubAdminDetails)
}