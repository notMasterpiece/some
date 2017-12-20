import React from 'react';

class CommentsItem extends React.Component {
  render() {

    const {item} = this.props;
    console.log(item);

    return (
      <li className='comments_item'>
        <h2 className="comm_user">{item.user}</h2>
        <div className="comm_id">{item.id}</div>
        <div className="comm_text">{item.text}</div>
      </li>
    )
  }
}

export default CommentsItem;