import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";

import { toast } from 'react-toastify';
import { ADD_PURCHASE, ADD_PURCHASE_FAILURE, ADD_PURCHASE_SUCCESS, ADD_SUPPLIER, ADD_SUPPLIER_FAILURE, ADD_SUPPLIER_SUCCESS, BLOCK_SUPPLIER, BLOCK_SUPPLIER_FAILURE, BLOCK_SUPPLIER_SUCCESS, GET_PURCHASE, GET_PURCHASE_FAILURE, GET_PURCHASE_SUCCESS, GET_SUPPLIERS, GET_SUPPLIERS_FAILURE, GET_SUPPLIERS_SUCCESS, GET_SUPPLIER_DETAILS, GET_SUPPLIER_DETAILS_FAILURE, GET_SUPPLIER_DETAILS_SUCCESS, SET_SUPPLIER_STATUS, SET_SUPPLIER_STATUS_FAILURE, SET_SUPPLIER_STATUS_SUCCESS, UPDATE_SUPPLIER, UPDATE_SUPPLIER_FAILURE, UPDATE_SUPPLIER_SUCCESS } from "../actionTypes";

function* watcherGetSuppliers() {
    let url = '/get-supplier';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_SUPPLIERS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_SUPPLIERS_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddSupplier(data) {
    let url = '/add-supplier';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: ADD_SUPPLIER_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUPPLIERS, payload: Data.data });
    }
    else {
        yield put({ type: ADD_SUPPLIER_FAILURE, payload: Data.data.error })
    }
}

function* watcherUpdateSupplier(data) {
    let url = '/update-supplier';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: UPDATE_SUPPLIER_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUPPLIERS, payload: Data.data });
    }
    else {
        yield put({ type: UPDATE_SUPPLIER_FAILURE, payload: Data.data.error })
    }
}

function* watcherSetSupplierStatus(data) {
    let url = `/supplier/status-update/${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: SET_SUPPLIER_STATUS_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUPPLIERS, payload: Data.data });
    }
    else {
        yield put({ type: SET_SUPPLIER_STATUS_FAILURE, payload: Data.data.error })
    }
}



function* watcherGetPurchases() {
    let url = '/get-purchase';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_PURCHASE_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_PURCHASE_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddPurchase(data) {
    let url = '/add-Purchase';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: ADD_PURCHASE_SUCCESS, payload: Data.data });
        yield put({ type: GET_SUPPLIERS, payload: Data.data });
    }
    else {
        yield put({ type: ADD_PURCHASE_FAILURE, payload: Data.data.error })
    }
}
// function* watcherGetSupplierDetails(data) {
//     let url = `/admin/Supplier_controller/getSupplierDetail?Supplier_id=${data.payload}`;
//     const Data = yield call(callApi, url, 'GET', '', true);
//     if (Data.status === 200 || Data.status === 201) {
//         yield put({ type: GET_SUPPLIER_DETAILS_SUCCESS, payload: Data.data });
//     }
//     else {
//         yield put({ type: GET_SUPPLIER_DETAILS_FAILURE, payload: Data.data.error })
//     }
// }
// function* watcherBlockSupplier(data) {
//     let url = '/admin/Supplier_controller/blockSupplier';

//     const Data = yield call(callApi, url, 'POST', data.payload, true);
//     if (Data.status === 200 || Data.status === 201) {
//         yield put({ type: BLOCK_SUPPLIER_SUCCESS, payload: Data.data });
//         yield put({ type: GET_SUPPLIER_DETAILS, payload: data.payload.Supplier_id })
//         toast.success(Data?.data?.message);
//     }
//     else {
//         yield put({ type: BLOCK_SUPPLIER_FAILURE, payload: Data.data.error })
//     }
// }

export default function* watchSuppliers() {
    yield takeLatest(GET_SUPPLIERS, watcherGetSuppliers)
    yield takeLatest(ADD_SUPPLIER, watcherAddSupplier)
    yield takeLatest(UPDATE_SUPPLIER, watcherUpdateSupplier)
    yield takeLatest(SET_SUPPLIER_STATUS, watcherSetSupplierStatus)

    yield takeLatest(GET_PURCHASE, watcherGetPurchases)
    yield takeLatest(ADD_PURCHASE, watcherAddPurchase)

    // yield takeLatest(GET_SUPPLIER_DETAILS, watcherGetSupplierDetails)
    // yield takeLatest(BLOCK_SUPPLIER, watcherBlockSupplier)
}
