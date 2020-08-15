import { combineReducers } from "redux";
import { ADD_DATA } from "../actions/data";

function data(state = null, action) {
    switch(action.type) {
        case ADD_DATA:
            return action.data;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ data });
export default rootReducer;