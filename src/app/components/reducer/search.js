import {SEARCH} from '../Constans/shop';


export default (search = '', action) => {

  if( action.type === 'SEARCH') {
    return search = action.payload.value;
  }

  return search;
}