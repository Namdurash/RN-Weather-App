import { LoginActions } from "./actionTypes";
// import * as helpers from '../helpers';

const initialState = {
  loggedIn: false,
  // error: null
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // case types.LOGIN: {
    //   return {
    //     ...state,
    //     user: action.payload,
    //     // error: null
    //     loginStatus: helpers.getRequestState()
    //   };
    // }
    case LoginActions.LOGIN_SUCCESS: {
      const successMessage = 'You are logged in';
      return {
        ...state,
        loggedIn: true,
      };
    }
    case LoginActions.LOGIN_FAILURE: {
      const { payload } = action;
      return {
        ...state,
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;