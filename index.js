import counterReducer from "../reducers/counter";
import loggedReducer from "../reducers/isLogged";
import counterReducer1 from "../reducers/counter1";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    counter1: counterReducer1,
    isLogged: loggedReducer,
});

export default allReducers;