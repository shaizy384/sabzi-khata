import { call, put, takeLatest } from "redux-saga/effects";
import { DASHBOARD_DATA_SUCCESS, DASHBOARD_DATA_FAILURE, DASHBOARD_DATA } from "../../redux/actionTypes";
import { callApi } from "../../api/APIs";

function* watcherDashboardData() {
    let url = '/dashboard/getDashboardData';
    const Data = yield call(callApi, url, 'GET', '', true);
    if (Data.status === 200) {
        yield put({ type: DASHBOARD_DATA_SUCCESS, payload: Data.data });
    }
    else {
        yield put({ type: DASHBOARD_DATA_FAILURE, payload: Data.data.error })
    }
}

export default function* watchDashboardData() {
    yield takeLatest(DASHBOARD_DATA, watcherDashboardData)
}