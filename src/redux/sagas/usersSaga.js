import {put, select} from 'redux-saga/effects';
import * as  api from '../../api/apiService';
import ACTIONS from '../action/actionTypes';

//WORKERS

export function* getAllUsersSaga() {
    yield put({type: ACTIONS.GET_ALL_USERS_REQUEST}); // reducer
    try {
        const {data} = yield api.getAllUsersApi()
        // in this place if you need you can make redirect using history
        yield put({type: ACTIONS.GET_ALL_USERS_RESPONSE, users: data.users});
    } catch (error) {
        // in this place you can show toaster to notify user about trouble
        yield put({type: ACTIONS.GET_ALL_USERS_ERROR, message: 'Somthing went wrong! Try again later. Sorry, it'});
    }
};
 
export function* getUserByIdSaga(action) {
    yield put({type: ACTIONS.GET_USER_BY_ID_REQUEST});
    try {
        const {data} = yield api.getUserByIdApi(action.id)
        yield put({type: ACTIONS.GET_USER_BY_ID_RESPONSE, user: data}); 
    } catch (error) {
        yield put({type: ACTIONS.GET_USER_BY_ID_ERROR, message: 'Somthing went wrong! Try again later. Sorry, it'});

    }
};

export function* createUserSaga(action) {
    yield put({type: ACTIONS.CREATE_USER_REQUEST});
    try {
        const {data} = yield api.createUserApi(action.userBody);
        // in this place you can clone and modify store
        const {userReducer} = yield select();
        const users = [...userReducer.users, data.user];
       
        yield put({type: ACTIONS.CREATE_USER_RESPONSE, users}); 
    } catch (error) {
        yield put({type: ACTIONS.CREATE_USER_ERROR, message: 'Somthing went wrong! Try again later. Sorry, it'});

    }

};


// in this place we will call api, put actions into reducer, make redirects, show toasts and notification

