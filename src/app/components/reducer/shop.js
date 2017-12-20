import {REMOVE_STATS, ADD_GROSERY, REMOVE_GROSERY} from '../Constans/shop';
import shops from '../Shop/json'
import {addToBag} from '../../../helper';

export default (shopList = shops, action) => {

  // if( action.type === 'REMOVE_STATS') {
  //   return shopList.filter(el => {
  //     return el.id !== action.payload.id
  //   })
  // }


  if( action.type === 'ADD_GROSERY') {
    return shopList.filter(el => {
      return el.id !== action.payload.id
    })
  }
  if( action.type === 'REMOVE_GROSERY') {
    const shoppingBar = [...shopList, addToBag(action.payload.id)];
    return shoppingBar;
  }

  return shopList;
}