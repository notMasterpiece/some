import todo from '../../../data';


export default (todos = todo, action) => {

  if( action.type === 'REMOVE_ITEM') {
    return todos.filter( item => {
      return item.id !== action.payload.id;
    });
  }

  if( action.type === 'ADD_ITEM') {

    return ([action.payload.item, ...todos]);

  }

  if( action.type === 'ALL_COMPLETE') {
    return todos.map( item => {
        return {...item, completed:true};
    });
  }

  if( action.type === 'ALL_UNCOMPLETE') {
    return todos.map( item => {
        return {...item, completed:false};
    });
  }

  if( action.type === 'TOGGLE_TODOS') {
    const {id} = action.payload;

    return todos.map( el => {
        if(el.id !== id) {
          return el;
        } else {
          return {...el, completed: !el.completed};
        }
      });
  }

  return todos;
}