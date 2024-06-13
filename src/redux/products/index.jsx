import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";
import { toast } from 'react-toastify';
import { ADD_PRODUCT, ADD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS, BLOCK_PRODUCT, BLOCK_PRODUCT_FAILURE, BLOCK_PRODUCT_SUCCESS, GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS, GET_PRODUCT_DETAILS, GET_PRODUCT_DETAILS_FAILURE, GET_PRODUCT_DETAILS_SUCCESS, SET_PRODUCT_STATUS, SET_PRODUCT_STATUS_FAILURE, SET_PRODUCT_STATUS_SUCCESS, UPDATE_PRODUCT, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_SUCCESS } from "../actionTypes";

function* watcherGetProducts() {
    let url = '/get-product';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        console.log("redux products: ", Data.data);
        yield put({ type: GET_PRODUCTS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_PRODUCTS_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddProduct(data) {
    let toastId = toast.loading("Loading...")
    let url = '/add-product';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: "Produuct stored successfully", type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_PRODUCT_SUCCESS, payload: Data.data });
        yield put({ type: GET_PRODUCTS });
    }
    else {
        toast.update(toastId, { render: "Something went wrong", type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: ADD_PRODUCT_FAILURE, payload: Data.data.error })
    }
}

function* watcherUpdateProduct(data) {
    let toastId = toast.loading("Loading...")
    let url = '/update-product';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: "Data updated successfully", type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: UPDATE_PRODUCT_SUCCESS, payload: Data.data });
        yield put({ type: GET_PRODUCTS });
    }
    else {
        toast.update(toastId, { render: "something went wrong", type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: UPDATE_PRODUCT_FAILURE, payload: Data.data.error })
    }
}

function* watcherSetProductStatus(data) {
    let toastId = toast.loading("Loading...")
    let url = `/product/status-update/${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        toast.update(toastId, { render: "Status Updated", type: 'success', isLoading: false, autoClose: 1000 })
        yield put({ type: SET_PRODUCT_STATUS_SUCCESS, payload: Data.data });
        yield put({ type: GET_PRODUCTS });
    }
    else {
        toast.update(toastId, { render: "An error occured", type: 'error', isLoading: false, autoClose: 1000 })
        yield put({ type: SET_PRODUCT_STATUS_FAILURE, payload: Data.data.error })
    }
}

// function* watcherGetProductDetails(data) {
//     let url = `/admin/Product_controller/getProductDetail?Product_id=${data.payload}`;
//     const Data = yield call(callApi, url, 'GET', '', true);
//     if (Data.status === 200 || Data.status === 201) {
//         yield put({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: Data.data });
//     }
//     else {
//         yield put({ type: GET_PRODUCT_DETAILS_FAILURE, payload: Data.data.error })
//     }
// }
// function* watcherBlockProduct(data) {
//     let url = '/admin/Product_controller/blockProduct';

//     const Data = yield call(callApi, url, 'POST', data.payload, true);
//     if (Data.status === 200 || Data.status === 201) {
//         yield put({ type: BLOCK_PRODUCT_SUCCESS, payload: Data.data });
//         yield put({ type: GET_PRODUCT_DETAILS, payload: data.payload.Product_id })
//         toast.success(Data?.data?.message);
//     }
//     else {
//         yield put({ type: BLOCK_PRODUCT_FAILURE, payload: Data.data.error })
//     }
// }

export default function* watchProducts() {
    yield takeLatest(GET_PRODUCTS, watcherGetProducts)
    yield takeLatest(ADD_PRODUCT, watcherAddProduct)
    yield takeLatest(UPDATE_PRODUCT, watcherUpdateProduct)
    yield takeLatest(SET_PRODUCT_STATUS, watcherSetProductStatus)

    // yield takeLatest(GET_PRODUCT_DETAILS, watcherGetProductDetails)
    // yield takeLatest(BLOCK_PRODUCT, watcherBlockProduct)
}
