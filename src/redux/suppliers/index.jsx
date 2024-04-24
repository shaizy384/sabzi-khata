import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";

import { toast } from 'react-toastify';
import { BLOCK_SUPPLIER, BLOCK_SUPPLIER_FAILURE, BLOCK_SUPPLIER_SUCCESS, GET_SUPPLIERS, GET_SUPPLIERS_FAILURE, GET_SUPPLIERS_SUCCESS, GET_SUPPLIER_DETAILS, GET_SUPPLIER_DETAILS_FAILURE, GET_SUPPLIER_DETAILS_SUCCESS } from "../actionTypes";

function* watcherGetSuppliers() {
    let url = '/admin/Supplier_controller/getSuppliers';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200) {
        yield put({ type: GET_SUPPLIERS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_SUPPLIERS_FAILURE, payload: Data.data.error })
    }
}
function* watcherGetSupplierDetails(data) {
    let url = `/admin/Supplier_controller/getSupplierDetail?Supplier_id=${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200) {
        yield put({ type: GET_SUPPLIER_DETAILS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_SUPPLIER_DETAILS_FAILURE, payload: Data.data.error })
    }
}
function* watcherBlockSupplier(data) {
    let url = '/admin/Supplier_controller/blockSupplier';

    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200) {
        yield put({ type: BLOCK_SUPPLIER_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUPPLIER_DETAILS, payload: data.payload.Supplier_id })
        toast.success(Data?.data?.message);
    }
    else {
        yield put({ type: BLOCK_SUPPLIER_FAILURE, payload: Data.data.error })
    }
}

export default function* watchSuppliers() {
    yield takeLatest(GET_SUPPLIERS, watcherGetSuppliers)
    yield takeLatest(GET_SUPPLIER_DETAILS, watcherGetSupplierDetails)
    yield takeLatest(BLOCK_SUPPLIER, watcherBlockSupplier)
}
