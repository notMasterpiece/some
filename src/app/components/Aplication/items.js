import React from 'react';
import uniqid from 'uniqid';

import { CSSTransitionGroup } from 'react-transition-group';


//redux
import {connect} from 'react-redux';
import {remove_item, toggle_todos} from '../ActionCreators/AC';



class Items extends React.Component {

  removeItems = id => () => {
    this.props.remove_item(id);
  };



  toggleItems = id => () => {
    this.props.toggle_todos(id);
  };



  render() {

    const {todos, onRemove, onToggle, searchValue} = this.props;

    const value = searchValue || '';


    return (
      <div className="pac_wrap">
          {
            todos.filter((el => el.title.toLowerCase().includes(value.toLowerCase()))).map(el => {
              return (
                <div className="item" key={uniqid()}>
                  <label htmlFor={el.id}>
                    <input
                      type="checkbox"
                      checked={el.completed}
                      onChange={ this.toggleItems(el.id) }
                    />
                  </label>
                  <h5 className="name">{el.title}</h5>
                  <div className="name">{el.id}</div>
                  <button onClick={this.removeItems(el.id)}>X</button>
                  <p>lola</p>
                </div>
              )
            })
          }

      </div>
    )
  }
}

export default connect(null, {remove_item, toggle_todos})(Items);