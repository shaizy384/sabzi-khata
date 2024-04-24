import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";

import { toast } from 'react-toastify';
import { BLOCK_CUSTOMER, BLOCK_CUSTOMER_FAILURE, BLOCK_CUSTOMER_SUCCESS, GET_CUSTOMERS, GET_CUSTOMERS_FAILURE, GET_CUSTOMERS_SUCCESS, GET_CUSTOMER_DETAILS, GET_CUSTOMER_DETAILS_FAILURE, GET_CUSTOMER_DETAILS_SUCCESS, GET_CUSTOMER_WARNINGS, GET_CUSTOMER_WARNINGS_FAILURE, GET_CUSTOMER_WARNINGS_SUCCESS, SET_CUSTOMER_WARNINGS, SET_CUSTOMER_WARNINGS_FAILURE, SET_CUSTOMER_WARNINGS_SUCCESS } from "../actionTypes";
function* watcherGetCustomers() {
    let url = '/admin/Customer_controller/getCustomers';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200) {
        yield put({ type: GET_CUSTOMERS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_CUSTOMERS_FAILURE, payload: Data.data.error })
    }
}
function* watcherGetCustomerDetails(data) {
    let url = `/admin/Customer_controller/getCustomerDetail?Customer_id=${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200) {
        yield put({ type: GET_CUSTOMER_DETAILS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_CUSTOMER_DETAILS_FAILURE, payload: Data.data.error })
    }
}
function* watcherGetCustomerWarnings(data) {
    let url = `/admin/Customer_controller/getCustomerWarning?Customer_id=${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200) {
        yield put({ type: GET_CUSTOMER_WARNINGS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_CUSTOMER_WARNINGS_FAILURE, payload: Data.data.error })
    }
}
function* watcherBlockCustomer(data) {
    let url = '/admin/Customer_controller/blockCustomer';

    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200) {
        yield put({ type: BLOCK_CUSTOMER_SUCCESS, payload: Data.data });
        yield put({ type: GET_CUSTOMER_DETAILS, payload: data.payload.Customer_id })
        toast.success(Data?.data?.message);
    }
    else {
        yield put({ type: BLOCK_CUSTOMER_FAILURE, payload: Data.data.error })
    }
}
function* watcherSetCustomerWarning(data) {
    let url = '/admin/Customer_controller/setCustomerWarning';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200) {
        yield put({ type: SET_CUSTOMER_WARNINGS_SUCCESS, payload: Data.data });
        yield put({ type: GET_CUSTOMER_WARNINGS, payload: data.payload.Customer_id });
        toast.success(Data?.data?.message);
    }
    else {
        yield put({ type: SET_CUSTOMER_WARNINGS_FAILURE, payload: Data.data.error })
        toast.error(Data?.data?.error);
    }
}
export default function* watchCustomers() {
    yield takeLatest(GET_CUSTOMERS, watcherGetCustomers)
    yield takeLatest(GET_CUSTOMER_DETAILS, watcherGetCustomerDetails)
    yield takeLatest(GET_CUSTOMER_WARNINGS, watcherGetCustomerWarnings)
    yield takeLatest(BLOCK_CUSTOMER, watcherBlockCustomer)
    yield takeLatest(SET_CUSTOMER_WARNINGS, watcherSetCustomerWarning)
}