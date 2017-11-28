import React, { Component } from 'react';
import './form.scss';

import Nav from '../Nav/nav';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    };
  }

  showErorrs = type => {

    if(type === 'name' && this.state[type].length && this.state[type].length < 10 ) {
      return 'er';
    }
    if(type === 'name' && this.state[type].length >= 10 ) {
      return 'noer';
    }
  };




  handle = type => ev => {
    console.log(type);
    this.setState({
      [type]: ev.target.value
    })

    // console.log(type);
    // console.log(el.target);
  };

  componentDidMount = () => {
    this.meInp.focus();
  };



  render() {
    let em = /^\d+$/;
    console.log(this.state.email.length);


    return (
      <div className="App">
        <form className='form' action="">
          <label>
            <input
            type="text"
            value={this.state.name}
            placeholder='name'
            onChange={this.handle('name')}
            className={this.showErorrs('name')}
            />
            {
              this.state.name.length && this.state.name.length < 10 ? <span className='error'>логін повиннен мати більше 10 символів</span> : null
            }
            {
              this.state.name.length && this.state.name.length >= 10 ? <span className='good'>good</span> : null
            }
          </label>

          <label>
            <input
            type="text"
            placeholder='email'
            value={this.state.email}
            onChange={this.handle('email')}
            className={this.showErorrs('email')}
            ref={e => this.meInp = e}
            />
            {
              this.state.email.length && !this.state.email.match(em) ? <span className='error'>тільки цифри</span> : null
            }
          </label>
        </form>
      </div>
    );
  }
}