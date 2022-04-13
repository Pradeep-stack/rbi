// import changeTheNumber from "./updown";
// import todoReducers from "./todoreducers";

import { combineReducers } from "redux";
import usersReducers from "./userReducer";
// import loginReducers from "./loginReducer";
import loginReducer from "./loginSlice";
const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        // changeTheNumber,
        // todoReducers,
       data: usersReducers,
    //    user:loginReducers,
       user:loginReducer

    }
);

export default reducers;