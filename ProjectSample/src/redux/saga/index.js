import {all, fork} from 'redux-saga/effects';
import {watchTokenSagas} from './tokenSaga';
export default function* rootSaga() {
  yield all([fork(watchTokenSagas)]);
}
