import React from 'react';
import uniqid from 'uniqid';


import {add_item} from '../ActionCreators/AC';
import { connect } from 'react-redux';


class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

  }


  handleChange = ev => {
    const value = ev.target.value;

    this.setState({
      value
    })

  };



  handleSubmit = ev => {
    ev.preventDefault();
    const {add_item} = this.props;
    const {value} = this.state;

    add_item({ title: value, id: uniqid(), completed:true });

    this.setState({ value: ''});


  };


  render() {

    const {value} = this.state;


    return (
      <form action="" className='form' onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Add item
          <input
            type="text"
            onChange={this.handleChange}
            value={value}
          />
        </label>
      </form>
    )
  }
}


export default connect(null, {add_item})(AddItem);