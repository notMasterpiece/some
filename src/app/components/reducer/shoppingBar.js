import {ADD_GROSERY, REMOVE_GROSERY} from '../Constans/shop';
import shops from '../Shop/json'


import {addToBag} from '../../../helper';

export default (shopList = [], action) => {

  if( action.type === 'ADD_GROSERY') {

    const shoppingBar = [...shopList, addToBag(action.payload.id)];
    return shoppingBar;

  }
  if( action.type === 'REMOVE_GROSERY') {
    return shopList.filter(el => {
      return el.id !== action.payload.id
    })
  }

  return shopList;
}