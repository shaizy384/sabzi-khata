import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";
import { toast } from 'react-toastify';
import { ADD_CUSTOMER, ADD_CUSTOMER_FAILURE, ADD_CUSTOMER_SUCCESS, ADD_SALE, ADD_SALE_FAILURE, ADD_SALE_SUCCESS, GET_CUSTOMERS, GET_CUSTOMERS_FAILURE, GET_CUSTOMERS_SUCCESS, GET_CUSTOMER_DETAILS, GET_CUSTOMER_DETAILS_FAILURE, GET_CUSTOMER_DETAILS_SUCCESS, GET_CUSTOMER_TRANSACTIONS, GET_CUSTOMER_TRANSACTIONS_FAILURE, GET_CUSTOMER_TRANSACTIONS_SUCCESS, SET_CUSTOMER_STATUS, SET_CUSTOMER_STATUS_FAILURE, SET_CUSTOMER_STATUS_SUCCESS, UPDATE_CUSTOMER, UPDATE_CUSTOMER_FAILURE, UPDATE_CUSTOMER_SUCCESS, DASHBOARD_DATA, ADD_CUSTOMER_CASH_SUCCESS, ADD_CUSTOMER_CASH_FAILURE, ADD_CUSTOMER_CASH } from "../actionTypes";

function* watcherGetCustomers() {
    let url = '/customers/getCustomers';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_CUSTOMERS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_CUSTOMERS_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddCustomer(data) {
    let url = '/customers/addCustomer';
    let toastId = toast.loading("Loading...")
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_CUSTOMER_SUCCESS, payload: Data.data });
        yield put({ type: GET_CUSTOMERS });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_CUSTOMER_FAILURE, payload: Data.data.error })
    }
}

function* watcherUpdateCustomer(data) {
    let url = '/customers/updateCustomer';
    let toastId = toast.loading("Loading...")
    const Data = yield call(callApi, url, 'PATCH', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: UPDATE_CUSTOMER_SUCCESS, payload: Data.data });
        yield put({ type: GET_CUSTOMER_DETAILS, payload: data._id });
        yield put({ type: GET_CUSTOMERS });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: UPDATE_CUSTOMER_FAILURE, payload: Data.data.error })
    }
}

function* watcherSetCustomerStatus(data) {
    let toastId = toast.loading("Loading...")
    let url = `/customers/updateStatus/${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: SET_CUSTOMER_STATUS_SUCCESS, payload: Data.data });
        yield put({ type: GET_CUSTOMER_DETAILS, payload: data._id });
        yield put({ type: GET_CUSTOMERS });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: SET_CUSTOMER_STATUS_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddSale(data) {
    let url = '/customers/addSale';
    let toastId = toast.loading("Loading...")
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_SALE_SUCCESS, payload: Data.data });
        yield put({ type: GET_CUSTOMER_DETAILS, payload: data.person_id });
        yield put({ type: DASHBOARD_DATA });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_SALE_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddCustomerCash(data) {
    let url = '/customers/addCash';
    let toastId = toast.loading("Loading...")
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_CUSTOMER_CASH_SUCCESS, payload: Data.data });
        yield put({ type: GET_CUSTOMERS });
        yield put({ type: DASHBOARD_DATA });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_CUSTOMER_CASH_FAILURE, payload: Data.data.error })
    }
}

function* watcherGetTransactions() {
    let url = '/customers/getTransactionReport';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_CUSTOMER_TRANSACTIONS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_CUSTOMER_TRANSACTIONS_FAILURE, payload: Data.data.error })
    }
}

function* watcherGetCustomerDetails(data) {
    let url = `/customers/getCustomer/${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_CUSTOMER_DETAILS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_CUSTOMER_DETAILS_FAILURE, payload: Data.data.error })
    }
}

export default function* watchCustomers() {
    yield takeLatest(GET_CUSTOMERS, watcherGetCustomers)
    yield takeLatest(GET_CUSTOMER_DETAILS, watcherGetCustomerDetails)
    yield takeLatest(ADD_CUSTOMER, watcherAddCustomer)
    yield takeLatest(UPDATE_CUSTOMER, watcherUpdateCustomer)
    yield takeLatest(SET_CUSTOMER_STATUS, watcherSetCustomerStatus)

    yield takeLatest(ADD_SALE, watcherAddSale)
    yield takeLatest(ADD_CUSTOMER_CASH, watcherAddCustomerCash)
    yield takeLatest(GET_CUSTOMER_TRANSACTIONS, watcherGetTransactions)
}