import { all } from 'redux-saga/effects'
import { countWatcher } from './testSaga'
import { userWatcher } from './userSaga'
export function* rootWatcher() {
    yield all([userWatcher(), countWatcher()]) // вызов() вотчеров
}
