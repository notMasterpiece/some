import React from 'react';
import uniqid from 'uniqid';


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
    // console.log(1);
    const {onSubmit} = this.props;
    const {value} = this.state;
    ev.preventDefault();

    onSubmit({ name: value, id: uniqid(), pakage:true });
    this.setState({ value: ''})


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


export default AddItem;