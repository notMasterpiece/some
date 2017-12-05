import React from 'react';


import {connect} from 'react-redux';
import {removeStatsInShop} from '../ActionCreators/AC';


class Stats extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }


  }


  handleClick = id => () => {
    this.props.removeStatsInShop(id);
  };


  render() {
    return (
      <div className="col-md-4 stats">
        <h1>Stats</h1>
        <form action="">
          <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={this.state.value}
                onChange={ e => this.setState({value: e.target.value})}
              />
          </div>
        </form>
        <ul className='list-group shop_item'>
          {
            this.props.shop.length > 0 ?
            this.props.shop.filter((el => el.name.toLowerCase().includes(this.state.value.toLowerCase()))).map(item => {
              return (
                  <li
                    key={item.id}
                    className="list-group-item"
                    onClick={this.handleClick(item.id)}
                  ><span>{item.name}</span> <span>{item.prise}</span> <span>{item.massa}</span></li>
              )
            })
              : <li>nothing</li>
          }
        </ul>
      </div>
    )
  }
}


export default connect(null, {removeStatsInShop})(Stats);