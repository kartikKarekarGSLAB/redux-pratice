import { createStore } from 'redux';
import reducer from './reducers';

const intialState = {};

const store = createStore(reducer, intialState);

export default store;
