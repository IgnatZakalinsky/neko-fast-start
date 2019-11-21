import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {reducer} from "./reducer";

const reducers = combineReducers({
    testState: reducer
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

// for dev
// window.store = store;

export default store
