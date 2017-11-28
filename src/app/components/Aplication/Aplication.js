import React from 'react';
import uniqid from 'uniqid';

import Items from './items';
import AddItem from './AddItem';
import Search from './Search';


import './eat.scss';


import {} from 'redux';



import faker from 'faker'


const arr = [
  {name: faker.name.firstName(), id: uniqid(), pakage: true},
  {name: faker.name.firstName(), id: uniqid(), pakage: true},
  {name: faker.name.firstName(), id: uniqid(), pakage: true},
  {name: faker.name.firstName(), id: uniqid(), pakage: true},
  {name: faker.name.firstName(), id: uniqid(), pakage: true},
  {name: faker.name.firstName(), id: uniqid(), pakage: true},
  {name: faker.name.firstName(), id: uniqid(), pakage: false},
  {name: faker.name.firstName(), id: uniqid(), pakage: false},
  {name: faker.name.firstName(), id: uniqid(), pakage: true}
];



class Eat extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      count : 54,
      arr: arr,
      value: '',
      searchValue: ''
    }
  }

  increment = () => {
    console.log(1);
    this.setState({
      count : this.state.count + 1
    },
      () => {
        console.log('state', this.state);
    })
  };


  // handleDelete = type => () => {
  //
  //   const arr = this.state.arr.filter( item => item.id !== type);
  //
  //   this.setState({
  //     arr
  //   })
  // };


  // handleSubmit = e => {
  //   e.preventDefault();
  //   const randomElement = uniqid();
  //   const newItem = {
  //     name: this.state.value,
  //     pakage: true,
  //     id: randomElement
  //   };
  //
  //   this.setState({
  //     arr: [...this.state.arr, newItem],
  //     value: ''
  //   })
  //
  // };


  // changePakage = type => el => {
  //   el.preventDefault();
  //   const item = this.state.arr.map( el => {
  //     if(el.id !== type.id) return el;
  //     return {...type, pakage: !type.pakage};
  //   });
  //
  //   console.log(item);
  //   this.setState({
  //     arr: item
  //   })
  // };

  // allPac = () => {
  //   const arr = this.state.arr.map( item => {
  //     return {...item, pakage:true};
  //   });
  //
  //   this.setState({
  //     arr
  //   })
  // };


  // new



  addItem = item => {
    console.log(item);
    this.setState({
      arr: [...this.state.arr, item ]
    })
  };


  removeItem = type => () => {
    this.setState({
      arr: this.state.arr.filter( el => {
        return el.id !== type.id;
      })
    })
  };

  toggleItem = type => item => {
    // console.log(item);
    // console.log(type);
    const arr = this.state.arr.map( el => {
      if(el.id !== item.id) return el;
      return {...item, pakage: !item.pakage};
    });

    // console.log(item);

    this.setState({
      arr
    })
  };




  allPac = () => {
    const arr = this.state.arr.map( item => {
      return {...item, pakage:true};
    });

    this.setState({
      arr
    })
  };


  allUnpac = () => {

    const arr = this.state.arr.map( item => {
      return {...item, pakage:false}
    });

    this.setState({ arr });

  };

  searchValue = val => {
    this.setState({
      searchValue: val
    })
  };






  render() {

    const {count, arr, value, searchValue} = this.state;

    const pac = arr.filter( el => {
      return el.pakage;
    });

    const unpac = arr.filter( el => {
      return !el.pakage;
    });

    const arrLength = arr.length;



    return (
      <div className="counter">
        <h1>Count: {count}</h1>
        <button onClick={()=> {this.increment()}}>increnent</button>


        <AddItem onSubmit={this.addItem} />
        <Search searchValue={this.searchValue}/>

        <h3>pac: {pac.length}</h3>

        <Items
          searchValue={searchValue}
          pac={pac}
          onRemove={this.removeItem}
          onToggle={this.toggleItem()}
        />

        <button onClick={this.allPac}>Pac all</button>




        <h3>unpac {unpac.length}</h3>

        <Items
          searchValue={searchValue}
          pac={unpac}
          onRemove={this.removeItem}
          onToggle={this.toggleItem()}
        />

        <button onClick={this.allUnpac}>Unpac all</button>



      </div>
    )
  }
}

export default Eat;