import React from 'react';
import CommentItem from './CommentsItem';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }


  }

  showComments = () => {
    const {open} = this.state;
    this.setState({
      open: !this.state.open
    })
  };




  render() {
    const {open} = this.state;

    return (
      <ul className='comments_wrap'>
        <li>
          <button onClick={this.showComments}>{open ? 'hide' : 'show'}</button>
        </li>
        {
          this.props.item.comments && open &&
          this.props.item.comments.map(item => {
            return (
              <CommentItem item={item} key={item.id} />
            )
          })
        }

      </ul>
    )
  }
}

export default CommentsList;