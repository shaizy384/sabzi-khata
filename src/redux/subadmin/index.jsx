import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";
import { toast } from 'react-toastify';
import { ADD_SUB_ADMIN, ADD_SUB_ADMIN_FAILURE, ADD_SUB_ADMIN_SUCCESS, BLOCK_SUB_ADMIN, BLOCK_SUB_ADMIN_FAILURE, BLOCK_SUB_ADMIN_SUCCESS, DELETE_SUB_ADMIN, DELETE_SUB_ADMIN_FAILURE, DELETE_SUB_ADMIN_SUCCESS, GET_SUB_ADMINS, GET_SUB_ADMINS_FAILURE, GET_SUB_ADMINS_SUCCESS, GET_SUB_ADMIN_DETAILS, GET_SUB_ADMIN_DETAILS_FAILURE, GET_SUB_ADMIN_DETAILS_SUCCESS, GET_SUB_ADMIN_WARNINGS, GET_SUB_ADMIN_WARNINGS_FAILURE, GET_SUB_ADMIN_WARNINGS_SUCCESS, SET_SUB_ADMIN_STATUS, SET_SUB_ADMIN_STATUS_FAILURE, SET_SUB_ADMIN_STATUS_SUCCESS, SET_SUB_ADMIN_WARNINGS, SET_SUB_ADMIN_WARNINGS_FAILURE, SET_SUB_ADMIN_WARNINGS_SUCCESS, UPDATE_SUB_ADMIN, UPDATE_SUB_ADMIN_FAILURE, UPDATE_SUB_ADMIN_SUCCESS } from "../actionTypes";

function* watcherGetSubAdmins() {
    let url = '/get-subAdmin';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_SUB_ADMINS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_SUB_ADMINS_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddSubAdmin(data) {
    let url = '/auth/add-subAdmin';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: ADD_SUB_ADMIN_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUB_ADMINS });
    }
    else {
        yield put({ type: ADD_SUB_ADMIN_FAILURE, payload: Data.data.error })
    }
}

function* watcherUpdateSubAdmin(data) {
    let url = '/auth/update-subAdmin';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: UPDATE_SUB_ADMIN_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUB_ADMINS });
    }
    else {
        yield put({ type: UPDATE_SUB_ADMIN_FAILURE, payload: Data.data.error })
    }
}


function* watcherDeleteSubAdmin(data) {
    let url = `/auth/delete-subAdmin/${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: DELETE_SUB_ADMIN_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUB_ADMINS });
    }
    else {
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
function* watcherGetSubAdminDetails(data) {
    let url = `/admin/SubAdmin_controller/getSubAdminDetail?SubAdmin_id=${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_SUB_ADMIN_DETAILS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_SUB_ADMIN_DETAILS_FAILURE, payload: Data.data.error })
    }
}

// function* watcherBlockSubAdmin(data) {
//     let url = '/admin/Customer_controller/blockCustomer';

//     const Data = yield call(callApi, url, 'POST', data.payload, true);
//     if (Data.status === 200 || Data.status === 201) {
//         yield put({ type: BLOCK_CUSTOMER_SUCCESS, payload: Data.data });
//         yield put({ type: GET_CUSTOMER_DETAILS, payload: data.payload.Customer_id })
//         toast.success(Data?.data?.message);
//     }
//     else {
//         yield put({ type: BLOCK_CUSTOMER_FAILURE, payload: Data.data.error })
//     }
// }
// function* watcherSetCustomerWarning(data) {
//     let url = '/admin/Customer_controller/setCustomerWarning';
//     const Data = yield call(callApi, url, 'POST', data.payload, true);
//     if (Data.status === 200 || Data.status === 201) {
//         yield put({ type: SET_CUSTOMER_WARNINGS_SUCCESS, payload: Data.data });
//         yield put({ type: GET_CUSTOMER_WARNINGS, payload: data.payload.Customer_id });
//         toast.success(Data?.data?.message);
//     }
//     else {
//         yield put({ type: SET_CUSTOMER_WARNINGS_FAILURE, payload: Data.data.error })
//         toast.error(Data?.data?.error);
//     }
// }
export default function* watchSubAdmins() {
    yield takeLatest(GET_SUB_ADMINS, watcherGetSubAdmins)
    yield takeLatest(ADD_SUB_ADMIN, watcherAddSubAdmin)
    yield takeLatest(UPDATE_SUB_ADMIN, watcherUpdateSubAdmin)
    yield takeLatest(DELETE_SUB_ADMIN, watcherDeleteSubAdmin)
    yield takeLatest(SET_SUB_ADMIN_STATUS, watcherSubAdminStatus)

    yield takeLatest(GET_SUB_ADMIN_DETAILS, watcherGetSubAdminDetails)
    // yield takeLatest(GET_SUB_ADMIN_WARNINGS, watcherGetSubAdminWarnings)
    // yield takeLatest(BLOCK_SUB_ADMIN, watcherBlockSubAdmin)
    // yield takeLatest(SET_SUB_ADMIN_WARNINGS, watcherSetSubAdminWarning)
}