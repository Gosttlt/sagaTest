import { applyMiddleware, combineReducers, createStore } from "redux";
import testReducer from "./testReducer";
import createSagaMiddleware from "@redux-saga/core";

import userReduser from "./userReducer";
import { rootWatcher } from "../saga";

const reducers = combineReducers({ testReducer, userReduser });

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)



window.store = store;

export default store;