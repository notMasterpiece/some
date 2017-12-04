import {combineReducers} from 'redux';

import counterReducer from './counter';
import todosReducer from './array';

export default combineReducers({
  counter: counterReducer,
  todos: todosReducer
})