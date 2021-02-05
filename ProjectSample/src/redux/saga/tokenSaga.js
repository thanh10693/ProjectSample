import {put, takeLatest} from 'redux-saga/effects';
import HttpService from '../../core/services/network';
import Actions, {getActionFail, getActionSuccess} from '../actions';

function* getToken(actions) {
  try {
    const res = yield HttpService.post('getToken', actions.body, 'urlencoded');
    console.log('res', res);
    // if (res.error.error_code > 0) {
    //   yield put({
    //     type: getActionFail(Actions.GET_TOKEN),
    //     error: res.error,
    //   });
    // } else {
    //   yield put({
    //     type: getActionSuccess(Actions.GET_TOKEN),
    //     data: res.token,
    //   });
    // }
  } catch (error) {
    console.log('eror', error);
    // yield put({
    //   type: getActionFail(Actions.GET_TOKEN),
    //   error: error,
    // });
  }
}
export function* watchTokenSagas() {
  yield takeLatest(Actions.GET_TOKEN, getToken);
}
