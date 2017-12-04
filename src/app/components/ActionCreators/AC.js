import {
  INCREMENT,
  DECREMENT,
  REMOVE_ITEM,
  ADD_ITEM,
  ALL_COMPLETE,
  ALL_UNCOMPLETE,
  TOGGLE_TODOS
} from '../Constans/constans';


export function Increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function remove_item(id) {
  return {
    type: REMOVE_ITEM,
    payload: { id }
  }
}


export function add_item(item) {
  return {
    type: ADD_ITEM,
    payload: {item}

  }
}

export function all_complete() {
  return {
    type: ALL_COMPLETE
  }
}

export function all_uncomplete() {
  return {
    type: ALL_UNCOMPLETE
  }
}

export function toggle_todos(id, item) {
  return {
    type: TOGGLE_TODOS,
    payload: {id, item}
  }
}