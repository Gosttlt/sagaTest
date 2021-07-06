import { call, put, takeEvery } from "redux-saga/effects"
import { actionCreater, FETCH_USER } from "../redux/userReducer"


function* userWorker() {
    const data = yield call(fatchFunc) // вызываем промис
    yield put(actionCreater(data)) // диспатчим экшен
}

export function* userWatcher() {
    yield takeEvery(FETCH_USER, userWorker) // передаем тип после диспатча которого сработает воркер который 
    //1) вызовит промис
    //2) задиспатчит экшн
}


const fatchFunc = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    return await data.json() // возвращяем промис
}