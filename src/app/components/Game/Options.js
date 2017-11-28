import React from 'react';


class Option extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      res: null
    }

  }

  handleClick = () => {
    this.props.handleClick(this.props.option);

  };

  render() {

    return (
      <div
        ref={el => {this.option = el}}
        onClick={this.handleClick}
        className='game_answer'
      >{this.props.option}</div>
    )
  }
};

export default Option;