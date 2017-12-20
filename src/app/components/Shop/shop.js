import React from 'react';
import './shop.scss';


import {connect} from 'react-redux';


import Grosery from './Grosery';
import Stats  from './Stats';
import ShopingBar from './ShopingBar';
import Search from './Search';

class Shop extends React.Component {


  componentDidMount() {
    // console.log(store.getState());
  }

  componentWillMount() {
    // console.log('will');
  }




  render() {

    const {shop,shoppingBar} = this.props;

    return (
      <div className='container'>
        <div className="row">
          <div className="col-sm-12">
            <Search />
          </div>
        </div>
        <div className="row">
          <Grosery shop={shop}  />
          <ShopingBar shoppingBar={shoppingBar} />
          <Stats shop={shop} />
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    )
  }
}


export default connect(state => {
  return {
    shop: state.shop,
    shoppingBar: state.shoppingBar
  }
})(Shop);