import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";
import { toast } from 'react-toastify';
import { ADD_PURCHASE, ADD_PURCHASE_FAILURE, ADD_PURCHASE_SUCCESS, ADD_SUPPLIER, ADD_SUPPLIER_CASH, ADD_SUPPLIER_CASH_FAILURE, ADD_SUPPLIER_CASH_SUCCESS, ADD_SUPPLIER_FAILURE, ADD_SUPPLIER_SUCCESS, DASHBOARD_DATA, GET_SUPPLIERS, GET_SUPPLIERS_FAILURE, GET_SUPPLIERS_SUCCESS, GET_SUPPLIER_DETAILS, GET_SUPPLIER_DETAILS_FAILURE, GET_SUPPLIER_DETAILS_SUCCESS, GET_SUPPLIER_TRANSACTIONS, GET_SUPPLIER_TRANSACTIONS_FAILURE, GET_SUPPLIER_TRANSACTIONS_SUCCESS, SET_SUPPLIER_STATUS, SET_SUPPLIER_STATUS_FAILURE, SET_SUPPLIER_STATUS_SUCCESS, UPDATE_SUPPLIER, UPDATE_SUPPLIER_FAILURE, UPDATE_SUPPLIER_SUCCESS } from "../actionTypes";

function* watcherGetSuppliers() {
    let url = '/suppliers/getSuppliers';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_SUPPLIERS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_SUPPLIERS_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddSupplier(data) {
    let url = '/suppliers/addSupplier';
    let toastId = toast.loading("Loading...")
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_SUPPLIER_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUPPLIERS });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_SUPPLIER_FAILURE, payload: Data.data.error })
    }
}

function* watcherUpdateSupplier(data) {
    let toastId = toast.loading("Loading...")
    let url = '/suppliers/updateSupplier';
    const Data = yield call(callApi, url, 'PATCH', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: UPDATE_SUPPLIER_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUPPLIER_DETAILS, payload: data._id });
        yield put({ type: GET_SUPPLIERS });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: UPDATE_SUPPLIER_FAILURE, payload: Data.data.error })
    }
}

function* watcherSetSupplierStatus(data) {
    let url = `/suppliers/updateStatus/${data.payload}`;
    let toastId = toast.loading("Loading...")
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: SET_SUPPLIER_STATUS_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUPPLIER_DETAILS, payload: data._id });
        yield put({ type: GET_SUPPLIERS });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: SET_SUPPLIER_STATUS_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddSupplierCash(data) {
    let url = '/suppliers/addCash';
    let toastId = toast.loading("Loading...")
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_SUPPLIER_CASH_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUPPLIERS });
        yield put({ type: DASHBOARD_DATA });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_SUPPLIER_CASH_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddPurchase(data) {
    let toastId = toast.loading("Loading...")
    let url = '/suppliers/addPurchase';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_PURCHASE_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUPPLIER_DETAILS, payload: data.person_id });
        yield put({ type: DASHBOARD_DATA });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_PURCHASE_FAILURE, payload: Data.data.error })
    }
}

function* watcherGetSupplierTransactions() {
    let url = '/suppliers/getTransactionReport';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_SUPPLIER_TRANSACTIONS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_SUPPLIER_TRANSACTIONS_FAILURE, payload: Data.data.error })
    }
}

function* watcherGetSupplierDetails(data) {
    let url = `/suppliers/getSupplier/${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_SUPPLIER_DETAILS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_SUPPLIER_DETAILS_FAILURE, payload: Data.data.error })
    }
}

export default function* watchSuppliers() {
    yield takeLatest(GET_SUPPLIERS, watcherGetSuppliers)
    yield takeLatest(GET_SUPPLIER_DETAILS, watcherGetSupplierDetails)
    yield takeLatest(ADD_SUPPLIER, watcherAddSupplier)
    yield takeLatest(UPDATE_SUPPLIER, watcherUpdateSupplier)
    yield takeLatest(SET_SUPPLIER_STATUS, watcherSetSupplierStatus)
    
    yield takeLatest(ADD_PURCHASE, watcherAddPurchase)
    yield takeLatest(ADD_SUPPLIER_CASH, watcherAddSupplierCash)
    yield takeLatest(GET_SUPPLIER_TRANSACTIONS, watcherGetSupplierTransactions)
}
