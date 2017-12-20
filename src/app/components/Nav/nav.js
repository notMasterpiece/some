import React from 'react';
import './nav.scss';
import { NavLink } from 'react-router-dom';



class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let arr = [1,2,3,4,5];

    let nArr =  arr.reduce((el, memo) => {
      return el + memo;
    });


    return (
      <nav className='top_menu'>
        <ul>
          <li><NavLink activeClassName='active' exact to="/">home</NavLink></li>
          <li><NavLink activeClassName='active' to="/contact">contact</NavLink></li>
          <li><NavLink activeClassName='active' to="/about">about</NavLink></li>
          <li><NavLink activeClassName='active' to="/form">form</NavLink></li>
          <li><NavLink activeClassName='active' to="/game">game</NavLink></li>
          <li><NavLink activeClassName='active' to="/port">port</NavLink></li>
          <li><NavLink activeClassName='active' to="/Aplication">Aplication</NavLink></li>
          <li><NavLink activeClassName='active' to="/shop">Shop</NavLink></li>
          <li><NavLink activeClassName='active' to="/ru">ru</NavLink></li>
          <li><NavLink activeClassName='active' to="/movie">Movie</NavLink></li>
          <li><NavLink activeClassName='active' to="/fav">fav</NavLink></li>
        </ul>
      </nav>
    )
  }
}


export default Nav;