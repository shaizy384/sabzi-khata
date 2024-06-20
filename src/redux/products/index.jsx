import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";
import { toast } from 'react-toastify';
import { ADD_PRODUCT, ADD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS, GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS, SET_PRODUCT_STATUS, SET_PRODUCT_STATUS_FAILURE, SET_PRODUCT_STATUS_SUCCESS, UPDATE_PRODUCT, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_SUCCESS } from "../actionTypes";

function* watcherGetProducts() {
    let url = '/products/getProducts';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_PRODUCTS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_PRODUCTS_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddProduct(data) {
    let toastId = toast.loading("Loading...")
    let url = '/products/addProduct';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_PRODUCT_SUCCESS, payload: Data.data });
        yield put({ type: GET_PRODUCTS });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_PRODUCT_FAILURE, payload: Data.data.error })
    }
}

function* watcherUpdateProduct(data) {
    let toastId = toast.loading("Loading...")
    let url = '/products/updateProduct';
    const Data = yield call(callApi, url, 'PATCH', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: UPDATE_PRODUCT_SUCCESS, payload: Data.data });
        yield put({ type: GET_PRODUCTS });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: UPDATE_PRODUCT_FAILURE, payload: Data.data.error })
    }
}

function* watcherSetProductStatus(data) {
    let toastId = toast.loading("Loading...")
    console.log("data.payload: ", data);
    let url = `/products/updateStatus/${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: Data.data.message, type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: SET_PRODUCT_STATUS_SUCCESS, payload: Data.data });
        yield put({ type: GET_PRODUCTS });
    }
    else {
        toast.update(toastId, { render: Data.data.message, type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: SET_PRODUCT_STATUS_FAILURE, payload: Data.data.error })
    }
}

export default function* watchProducts() {
    yield takeLatest(GET_PRODUCTS, watcherGetProducts)
    yield takeLatest(ADD_PRODUCT, watcherAddProduct)
    yield takeLatest(UPDATE_PRODUCT, watcherUpdateProduct)
    yield takeLatest(SET_PRODUCT_STATUS, watcherSetProductStatus)
}
