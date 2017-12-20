import {FAV_MOVIE} from '../Constans/shop';


import {addToBag} from '../../../helper';

export default (favMovie = [], action) => {
  if( action.type === 'FAV_MOVIE') {
    const favorite = [...favMovie, action.payload.movie];
    console.log(store.getState());
    return favorite;

  }

  return favMovie;
}