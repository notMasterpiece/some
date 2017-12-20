import React from 'react';


import {connect} from 'react-redux';


class Stats extends React.Component {
  totalCost = () => {
    let totalCost = 0;
    this.props.shoppingBar.forEach( item => totalCost += item.cost);
    return totalCost;
  };
  totalCalories = () => {
    let totalCalories = 0;
    this.props.shoppingBar.forEach( item => totalCalories += item.calories);
    return totalCalories;
  };
  totalWeight = () => {
    let totalWeight = 0;
    this.props.shoppingBar.forEach( item => totalWeight += item.weight);
    return totalWeight;
  };



  render() {
    return (
      <div className="col-md-4 stats">
        <h1>Stats</h1>
        <ul className='list-group shop_item'>
          <li className='list-group-item'>Cost - &nbsp;<b>{this.totalCost()} грн</b></li>
          <li className='list-group-item'>Calories - &nbsp;<b>{this.totalCalories()} ккал</b></li>
          <li className='list-group-item'>Weight - &nbsp;<b>{this.totalWeight()} кг</b></li>
        </ul>
      </div>
    )
  }
}


export default connect(state => {
  return {
    shoppingBar: state.shoppingBar
  }
})(Stats);