import todo from '../../../data';

export default (count = 134440, action) => {
  if( action.type === 'INCREMENT') {
    return count + 1;
  }

  if( action.type === 'DECREMENT') {
    return count - 1;
  }

  return count;
}