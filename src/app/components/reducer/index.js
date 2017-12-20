import {combineReducers} from 'redux';

import counterReducer from './counter';
import todosReducer from './array';
import filterReducer from './filter';
import shopReducer from './shop';
import ruReducer from './ru';
import shoppingReducer from './shoppingBar';
import searchReducer from './search';
import movieReducer from './movie';
import favMovieReducer from './favMovie';

export default combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  filter: filterReducer,
  shop: shopReducer,
  shoppingBar: shoppingReducer,
  search: searchReducer,
  ru: ruReducer,
  movie: movieReducer,
  favMovie: favMovieReducer
})