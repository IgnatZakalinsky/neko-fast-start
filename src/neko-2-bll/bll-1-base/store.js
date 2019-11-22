import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {reducer} from "./reducer";
import {newReducer} from "../bll-3-new/new-base/newReducer";

const reducers = combineReducers({
    testState: reducer,
    newState: newReducer
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

// for dev
window.store = store;

export default store
