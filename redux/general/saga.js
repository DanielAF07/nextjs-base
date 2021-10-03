import { all, fork, takeEvery } from 'redux-saga/effects';

import { MY_FIRST_ACTION } from '@redux/actions';

import {
    
} from './actions';



export function* myFirstWatcher() {
    yield takeEvery(MY_FIRST_ACTION, myFirstSaga);
}

function* myFirstSaga(payload){
    console.log(payload.payload);
}

export default function* rootSaga() {
    yield all([
        fork(myFirstWatcher),
    ]);
}
