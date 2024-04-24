import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";
import { toast } from 'react-toastify';
import { BLOCK_PRODUCT, BLOCK_PRODUCT_FAILURE, BLOCK_PRODUCT_SUCCESS, GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS, GET_PRODUCT_DETAILS, GET_PRODUCT_DETAILS_FAILURE, GET_PRODUCT_DETAILS_SUCCESS } from "../actionTypes";

function* watcherGetProducts() {
    let url = '/admin/Product_controller/getProducts';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200) {
        yield put({ type: GET_PRODUCTS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_PRODUCTS_FAILURE, payload: Data.data.error })
    }
}
function* watcherGetProductDetails(data) {
    let url = `/admin/Product_controller/getProductDetail?Product_id=${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200) {
        yield put({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_PRODUCT_DETAILS_FAILURE, payload: Data.data.error })
    }
}
function* watcherBlockProduct(data) {
    let url = '/admin/Product_controller/blockProduct';

    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200) {
        yield put({ type: BLOCK_PRODUCT_SUCCESS, payload: Data.data });
        yield put({ type: GET_PRODUCT_DETAILS, payload: data.payload.Product_id })
        toast.success(Data?.data?.message);
    }
    else {
        yield put({ type: BLOCK_PRODUCT_FAILURE, payload: Data.data.error })
    }
}

export default function* watchProducts() {
    yield takeLatest(GET_PRODUCTS, watcherGetProducts)
    yield takeLatest(GET_PRODUCT_DETAILS, watcherGetProductDetails)
    yield takeLatest(BLOCK_PRODUCT, watcherBlockProduct)
}
