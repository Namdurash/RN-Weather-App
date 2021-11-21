import { combineReducers } from "redux";
// import loginReducer from "../Login/loginReducer";
// import forecastReducer from "./forecastReducer";

// const rootReducer = combineReducers({
//     loginReducer,
//     forecastReducer
// })

// export default rootReducer;

import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
    loginReducer
})

export default rootReducer;