import {combineReducers} from 'redux';

import counterReducer from './counter';
import todosReducer from './array';
import filterReducer from './filter';
import shopReducer from './shop';

export default combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  filter: filterReducer,
  shop: shopReducer
})