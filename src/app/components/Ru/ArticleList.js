import React from 'react';
import ArticleItem from './ArticleItem';

import './commenst.scss';


import {connect} from 'react-redux';


class Ariclelist extends React.Component {
  render() {
    const {ru} = this.props;

    return (
      <div className='container'>
        {
          ru.map( item => {
            return <ArticleItem key={item.id} items={item} />
          })
        }
      </div>
    )
  }
}

export default connect(state => {
  return {
    ru: state.ru
  }
})(Ariclelist);