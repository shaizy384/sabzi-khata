import { all } from "redux-saga/effects";
import watchLogin from "../redux/auth";
import watchCustomers from "../redux/customers";
import watchSuppliers from "../redux/suppliers";
import watchProducts from "../redux/products";

export default function* rootSagas() {
    yield all([
        watchLogin(),
        watchCustomers(),
        watchSuppliers(),
        watchProducts()
    ])
}