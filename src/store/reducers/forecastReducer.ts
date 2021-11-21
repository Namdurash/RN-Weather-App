import * as types from '../Login/actionTypes';

// const initialState = {
//     name: '',
//     age: 16,
//     amountForecastDays: 5,
//     weatherUpdateRate: 30,
//     tempScale: 'Celsius',
// };

const initialState = {
    settings: {
        name: '',
        age: 0,
        amountForecastDays: 5,
        weatherUpdateRate: 30,
        tempScale: 'Celsius',
    },
    getSettingsStatus: null
};

const forecastReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case types.GET_SETTINGS: {
        return {
          ...state,
          getDiscountsStatus: null
        };
    }
    case types.GET_SETTINGS_SUCCESS: {
      return {
        ...state,
        getSettingsStatus: true
      };
    }
    case types.GET_SETTINGS_FAILURE: {
      const { payload } = action;
      return {
        ...state,
        getSettingsStatus: false
      };
    }
    // case types.UPDATE_SETTINGS: {
    //     return {
    //         ...state,
    //     }
    // }
    case types.UPDATE_SETTINGS_NAME: {
        const { payload } = action;
        return {
            ...state,
            settings: {...state.name, payload}
        }
    }
    default:
      return state;
  }
};

export default forecastReducer;