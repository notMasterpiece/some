import 'normalize.css';
import './assets/styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/components/App/App.jsx';
import NotFound from './app/components/NotFound/NotFound.jsx';
import About from './app/components/App/about';
import Contact from './app/components/App/contact';
import Form from './app/components/Form/index';
import Nav from './app/components/Nav/nav';
import Game from './app/components/Game/index';
import Port from './app/components/Port/port';
import Eat from './app/components/Aplication/Aplication';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/form" component={Form}/>
        <Route path="/game" component={Game}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/port" component={Port}/>
        <Route path="/eat" component={Eat}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </div>

  </Router>,
  document.querySelector('#app')
);