import {takeLatest} from 'redux-saga/effects';
import ACTION from '../action/actionTypes';
import * as UserSagas from './usersSaga';


// WATCHER
function* rootSaga() {//* функция генератор
    yield takeLatest(ACTION.GET_ALL_USERS, UserSagas.getAllUsersSaga);
    yield takeLatest(ACTION.GET_USER_BY_ID, UserSagas.getUserByIdSaga);
    yield takeLatest(ACTION.CREATE_USER, UserSagas.createUserSaga);

}


export default rootSaga;