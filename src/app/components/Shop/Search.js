import React from 'react';


import {connect} from 'react-redux';
import {searchInShop} from '../ActionCreators/AC';

class Search extends React.Component {


  handleChange = e => {
    this.props.searchInShop(e.target.value);
  };

  render() {
    const {search} = this.props;

    return (
      <div className='search_wrap'>
        <form action="">
          <label htmlFor="search">
            Пошук
            <input
              type="text"
              id='search'
              placeholder='Введiть запит'
              value={search}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    )
  }
}


export default connect(state => ({
    search: state.search
}), {searchInShop})(Search);