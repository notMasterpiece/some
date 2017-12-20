import React from 'react';
import CommentsList from './CommentsList'

class AdricleItem extends React.Component {




  render() {
    const {items} = this.props;

        return (
          <div className="article_wrap">
            <div className='articleItem'>
              <h2>{items.title}</h2>
              <div className="a_text">{items.text}</div>
              <div className="a_date">{items.date}</div>
            </div>
            <CommentsList item={items} />
          </div>
        )
  }
}

export default AdricleItem;