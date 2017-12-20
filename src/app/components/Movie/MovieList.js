import React from 'react';
import MovieItem from './MovieItem';


import { connect } from 'react-redux';


class MovieList extends React.Component {



  showNothisng = () => {
    return (
      <h1> You can search Movie...</h1>
    )
  };

  render() {

    console.log(store.getState());


    return (
      <div className='row'>
        {
          this.props.movie.length ?
          this.props.movie.map(item => {
            // return
            return <MovieItem item={item} key={item.id} />
          }) : this.showNothisng()
        }
      </div>
    )
  }
}

export default connect(state => {
  return {
    movie: state.movie
  }
})(MovieList);