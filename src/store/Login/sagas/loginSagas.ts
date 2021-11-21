import { all, call, put, takeLatest } from 'redux-saga/effects';

import { 
  loginSuccess,
  loginFailure
 } from '../loginActions';
 import { LoginActions } from "../actionTypes";

const logIn = async (email: any, password: any) => {
  try {

    // return { token: response.data };
  } catch (error) {
    console.error(error)
  }
};

export function* logInWithCredentials({ payload: { email, password }}) {
  try {
    const user = yield logIn(email, password);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* onLogInStart() {
  yield takeLatest<any>(LoginActions.LOGIN, logInWithCredentials);
}

export function* authSagas() {
  yield all([
    call(onLogInStart)
  ]);
}