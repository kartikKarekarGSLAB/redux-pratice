import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
const reducer = combineReducers({
    reducerMessage :  messageReducer});

export default reducer;