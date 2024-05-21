import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../api/APIs";
import { toast } from 'react-toastify';
import { ADD_CUSTOMER, ADD_CUSTOMER_FAILURE, ADD_CUSTOMER_SUCCESS, ADD_SALE, ADD_SALE_FAILURE, ADD_SALE_SUCCESS, BLOCK_CUSTOMER, BLOCK_CUSTOMER_FAILURE, BLOCK_CUSTOMER_SUCCESS, GET_CUSTOMERS, GET_CUSTOMERS_FAILURE, GET_CUSTOMERS_SUCCESS, GET_CUSTOMER_DETAILS, GET_CUSTOMER_DETAILS_FAILURE, GET_CUSTOMER_DETAILS_SUCCESS, GET_CUSTOMER_WARNINGS, GET_CUSTOMER_WARNINGS_FAILURE, GET_CUSTOMER_WARNINGS_SUCCESS, GET_SALES, GET_SALES_FAILURE, GET_SALES_SUCCESS, GET_SUPPLIERS, SET_CUSTOMER_STATUS, SET_CUSTOMER_STATUS_FAILURE, SET_CUSTOMER_STATUS_SUCCESS, SET_CUSTOMER_WARNINGS, SET_CUSTOMER_WARNINGS_FAILURE, SET_CUSTOMER_WARNINGS_SUCCESS, UPDATE_CUSTOMER, UPDATE_CUSTOMER_FAILURE, UPDATE_CUSTOMER_SUCCESS } from "../actionTypes";

function* watcherGetCustomers() {
    let url = '/get-customers';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_CUSTOMERS_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_CUSTOMERS_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddCustomer(data) {
    let url = '/add-customer';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: ADD_CUSTOMER_SUCCESS, payload: Data.data });
        yield put({ type: GET_CUSTOMERS });
    }
    else {
        yield put({ type: ADD_CUSTOMER_FAILURE, payload: Data.data.error })
    }
}

function* watcherUpdateCustomer(data) {
    let url = '/update-customer';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: UPDATE_CUSTOMER_SUCCESS, payload: Data.data });
        yield put({ type: GET_CUSTOMERS });
    }
    else {
        yield put({ type: UPDATE_CUSTOMER_FAILURE, payload: Data.data.error })
    }
}

function* watcherSetCustomerStatus(data) {
    let url = `/customer/status-update/${data.payload}`;
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: SET_CUSTOMER_STATUS_SUCCESS, payload: Data.data });
        yield put({ type: GET_CUSTOMERS });
    }
    else {
        yield put({ type: SET_CUSTOMER_STATUS_FAILURE, payload: Data.data.error })
    }
}



function* watcherGetSales() {
    let url = '/get-sale';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: GET_SALES_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: GET_SALES_FAILURE, payload: Data.data.error })
    }
}

function* watcherAddSale(data) {
    let url = '/add-sale';
    const Data = yield call(callApi, url, 'POST', data.payload, true);
    if (Data.status === 200 || Data.status === 201) {
        yield put({ type: ADD_SALE_SUCCESS, payload: Data.data });
        yield put({ type: GET_CUSTOMERS });
    }
    else {
        yield put({ type: ADD_SALE_FAILURE, payload: Data.data.error })
    }
}

// function* watcherGetCustomerDetails(data) {
//     let url = `/admin/Customer_controller/getCustomerDetail?Customer_id=${data.payload}`;
//     const Data = yield call(callApi, url, 'GET', '', true);
//     if (Data.status === 200 || Data.status === 201) {
//         yield put({ type: GET_CUSTOMER_DETAILS_SUCCESS, payload: Data.data });
//     }
//     else {
//         yield put({ type: GET_CUSTOMER_DETAILS_FAILURE, payload: Data.data.error })
//     }
// }
// function* watcherGetCustomerWarnings(data) {
//     let url = `/admin/Customer_controller/getCustomerWarning?Customer_id=${data.payload}`;
//     const Data = yield call(callApi, url, 'GET', '', true);
//     if (Data.status === 200 || Data.status === 201) {
//         yield put({ type: GET_CUSTOMER_WARNINGS_SUCCESS, payload: Data.data });
//     }
//     else {
//         yield put({ type: GET_CUSTOMER_WARNINGS_FAILURE, payload: Data.data.error })
//     }
// }
// function* watcherBlockCustomer(data) {
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
export default function* watchCustomers() {
    yield takeLatest(GET_CUSTOMERS, watcherGetCustomers)
    yield takeLatest(ADD_CUSTOMER, watcherAddCustomer)
    yield takeLatest(UPDATE_CUSTOMER, watcherUpdateCustomer)
    yield takeLatest(SET_CUSTOMER_STATUS, watcherSetCustomerStatus)

    yield takeLatest(GET_SALES, watcherGetSales)
    yield takeLatest(ADD_SALE, watcherAddSale)

    // yield takeLatest(GET_CUSTOMER_DETAILS, watcherGetCustomerDetails)
    // yield takeLatest(GET_CUSTOMER_WARNINGS, watcherGetCustomerWarnings)
    // yield takeLatest(BLOCK_CUSTOMER, watcherBlockCustomer)
    // yield takeLatest(SET_CUSTOMER_WARNINGS, watcherSetCustomerWarning)
}