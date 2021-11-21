import { LoginActions } from "./actionTypes";

export function loginStart(payload: any) {
    return {
        type: LoginActions.LOGIN,
        payload
    };
}

export function loginSuccess(payload: any) {
    return {
        type: LoginActions.LOGIN_SUCCESS,
        payload
    };
}

export function loginFailure(payload: any) {
    return {
        type: LoginActions.LOGIN_FAILURE,
        payload
    };
}

export function logout(payload: any) {
    return {
        type: LoginActions.LOG_OUT,
        payload
    }
}