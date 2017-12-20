import React from 'react';


import Search from './Search';
import MovieList from './MovieList';



//scss
import './movie.scss';


class Movie extends React.Component {
  render() {

    console.log(store.getState());


    return (
      <div className='movie'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 style={{textTransform: 'uppercase'}}>movie app</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Search />
            </div>
          </div>

          <div className="movie-list">
            <MovieList />
          </div>

        </div>
      </div>
    )
  }
}

export default Movie;