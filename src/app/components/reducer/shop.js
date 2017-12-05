import uniqid from 'uniqid';
import {REMOVE_STATS} from '../Constans/shop';

const shop = [
  {
    id: uniqid(),
    name: 'milk',
    prise: 1,
    massa: 2100
  },
  {
    id: uniqid(),
    name: 'bread',
    prise: 2,
    massa: 3100
  },
  {
    id: uniqid(),
    name: 'banane',
    prise: 3,
    massa: 1000
  },
  {
    id: uniqid(),
    name: 'bread',
    prise: 4,
    massa: 3100
  },
  {
    id: uniqid(),
    name: 'banane',
    prise: 5,
    massa: 1000
  },{
    id: uniqid(),
    name: 'milk',
    prise: 6,
    massa: 2100
  },
  {
    id: uniqid(),
    name: 'bread',
    prise: 7,
    massa: 3100
  },
  {
    id: uniqid(),
    name: 'banane',
    prise: 8,
    massa: 1000
  },
  {
    id: uniqid(),
    name: 'milk',
    prise: 9,
    massa: 2100
  },
  {
    id: uniqid(),
    name: 'bread',
    prise: 10,
    massa: 3100
  },
  {
    id: uniqid(),
    name: 'banane',
    prise: 39,
    massa: 1000
  }
];



export default (shopList = shop, action) => {
  if( action.type === 'REMOVE_STATS') {
    return shopList.filter(el => {
      return el.id !== action.payload.id
    })
  }

  return shopList;
}