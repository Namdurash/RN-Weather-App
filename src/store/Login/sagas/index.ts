import { all, call } from 'redux-saga/effects';

import { authSagas } from './loginSagas';

export default function* rootSaga() {
  yield all([call(authSagas)]);
}