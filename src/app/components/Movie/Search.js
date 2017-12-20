import React from 'react';

import axios from 'axios';


import config from './helper';


import {connect} from 'react-redux';
import {addMovie} from '../ActionCreators/AC'


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      arr : []
    }

  }

  searchClick = e => {
    e.preventDefault();
    let url = `${config.searchMovieUrl}${this.state.value}`;

    // fetch( url, {
    //   method: 'GET'
    // })
    //   .then(response => response.json()
    //   .then(arr => {
    //     this.setState({
    //       arr
    //     })
    //   })
    //   )

    axios.get(url)
      .then(response => {
        this.props.addMovie(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });

  };




  render () {



    const {value} = this.state;


    return (
      <form className='movie-search' onSubmit={this.searchClick}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Пошук</label>
          <input
            required
            autoComplete='off'
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="search..."
            value={value}
            onChange={ e => this.setState({value: e.target.value})}
          />
          <button
            type='submit'
            className='search_btn'
          >Пошук</button>
        </div>
      </form>
    )
  }
}

export default connect(null, {addMovie})(Search);