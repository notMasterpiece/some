import React from 'react';
import config from './helper';


import {connect} from 'react-redux';
import {favMovie} from '../ActionCreators/AC'



class MovieItem extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      favorited: true
    }

  }


  favorite = () => {
    if(this.state.favorited) {
      return <i className="far fa-heart"></i>
    } else {
      return <i className="fas fa-heart"></i>
    }
  };

  handleClick = e => {
    let a = e.target.parentNode;
    a.classList.add('scale');
    setTimeout( () => {
      a.classList.remove('scale');
    }, 500);
    this.setState({
      favorited: !this.state.favorited
    });
    console.log(this.props.favMovie(this.props.item));
  };


  render() {

    const {item} = this.props;

    return (
      <div className='col-sm-4'>
        <div className='movie-item'>
          <div className="movie-item_photo">
            <img src={`${config.src}${item.poster_path}`} alt=""/>
          </div>
          <div className="movie_hover">
            <div className="movie-date">
              <i className="far fa-calendar-alt"></i>
              {item.first_air_date || item.release_date || 'is unknown'}
            </div>
            <h2>{item.name || item.original_name || item.original_title || item.title}</h2>
            <div className='movie-text'>{item.overview}</div>
            <div className="movie_popular">
              <i className="fas fa-star"></i>
              {
                item.vote_average &&
                item.vote_average.toFixed(1)
              }
            </div>
            <div className="favorite" onClick={this.handleClick}>
              {this.favorite()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(null, {favMovie})(MovieItem);