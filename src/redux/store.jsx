import { applyMiddleware, compose, createStore } from "redux"
import createSagaMiddleware from 'redux-saga'
import reducers from "."
import rootSagas from "../sagas"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension
            ? window.devToolsExtension()
            : function (f) {
                return f;
            }
    ))
sagaMiddleware.run(rootSagas)
export default store;