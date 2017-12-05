import React from 'react';
import './shop.scss';


import {connect} from 'react-redux';


import Grosery from './Grosery';
import Stats  from './Stats';
import ShopingBar from './ShopingBar';

class Shop extends React.Component {


  componentDidMount() {
    console.log(store.getState());
  }


  render() {

    const {shop} = this.props;

    console.log('shop', this.props.shop);


    return (
      <div className='container'>
        <div className="row">
          <Grosery />
          <ShopingBar />
          <Stats shop={shop} />
        </div>
      </div>
    )
  }
}


export default connect(state => {
  return {
    shop: state.shop
  }
})(Shop);