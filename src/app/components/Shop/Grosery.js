import React from 'react';


import {connect} from 'react-redux';
import {addGroseryInShop} from '../ActionCreators/AC';

class Grosery extends React.Component {


  handleClick = type => () => {
    this.props.addGroseryInShop(type);
  };


  render() {

    const {shop} = this.props;

    return (
      <div className="col-md-4">
        <h1>Grocery items</h1>
        <ul className="list-group shop_item">
          {
            shop.filter((el => el.name.toLowerCase().includes(this.props.search.toLowerCase()))).map( item => {
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
          }
        </ul>
      </div>
    )
  }
}


export default connect(state => ({
  search: state.search
}), {addGroseryInShop})(Grosery);