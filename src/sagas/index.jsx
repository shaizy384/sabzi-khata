import { all } from "redux-saga/effects";
import watchLogin from "../redux/auth";
import watchCustomers from "../redux/customers";
import watchSuppliers from "../redux/suppliers";
import watchProducts from "../redux/products";
import watchSubAdmins from "../redux/subadmin";
import watchUser from "../redux/user";
import watchDashboardData from "../redux/dashboard";

export default function* rootSagas() {
    yield all([
        watchLogin(),
        watchDashboardData(),
        watchCustomers(),
        watchSuppliers(),
        watchProducts(),
        watchSubAdmins(),
        watchUser()
    ])
}