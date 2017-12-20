import {articles} from '../../../ru';

export default (ruList = articles, action) => {
  if( action.type === '') {
    return ruList
  }

  return ruList;
}