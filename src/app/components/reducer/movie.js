import {ADD_MOVIE} from '../Constans/shop';

export default (movie = [], action) => {
  if( action.type === 'ADD_MOVIE') {
    return movie = action.payload.movie;
  }

  return movie;
}