import React from 'react';
import MovieItem from './MovieItem';

import { connect } from 'react-redux';


class MovieList extends React.Component {

  render() {

    const {favMovie} = this.props;

    console.log(favMovie);

    return (
      <div className="container">
        <div className='row'>
        {
          favMovie.length ?
            favMovie.map(item => {
              // return
              return <MovieItem item={item} key={item.id} />
            }) : null
        }
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    favMovie: state.favMovie
  }
})(MovieList);