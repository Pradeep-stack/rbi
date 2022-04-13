import { createStore, applyMiddleware,compose } from "redux";
import reducers  from "./reducers/index";
import logger from "redux-logger";
import reduxThunk from 'redux-thunk';

const middlewares = [reduxThunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
if(process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
