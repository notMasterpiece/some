import React from 'react';


import {removeGroseryInShop} from '../ActionCreators/AC';
import {connect} from 'react-redux';

class ShopingBar extends React.Component {


  handleClick = type => () => {
    this.props.removeGroseryInShop(type);
  };


  render() {
    const {shoppingBar} = this.props;

    return (
      <div className="col-md-4">
        <h1>ShopingBar</h1>
        <ul className="list-group shop_item">
          {
            shoppingBar.length ?
            shoppingBar.filter((el => el.name.toLowerCase().includes(this.props.s.toLowerCase()))).map( item => {
              return (
                <li
                  key={item.id}
                  className="list-group-item"
                  onClick={this.handleClick(item.id)}
                >
                  <span>{item.name}</span>
                  <span>{item.cost}</span>
                  <span>{item.calories}</span>
                  <span>{item.weight}</span>
                </li>
              )
            })
              :
              <li className='list-group-item'>Пусто</li>
          }
        </ul>
      </div>
    )
  }
}


export default connect(state => ({
  s: state.search
}), {removeGroseryInShop})(ShopingBar);