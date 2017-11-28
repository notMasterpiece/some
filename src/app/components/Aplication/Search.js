import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    }


  }

  search = e => {

    this.setState({
      searchValue: e.target.value
    });

    this.props.searchValue(e.target.value);
  };



  render () {

    const {searchValue} = this.state;


    return (
      <form action="" className='form'>
        <label htmlFor="">
          Search item
          <input
            type="text"
            onChange={this.search}
            value={searchValue}
          />
        </label>
      </form>
    )
  }
}

export default Search;