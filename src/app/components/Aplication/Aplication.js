import React from 'react';
import uniqid from 'uniqid';
import Daypiker from '../DayPicer/Daypiker';

import Items from './items';
import AddItem from './AddItem';
import Search from './Search';

import {connect} from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';


// AC
import {Increment, decrement, all_complete, all_uncomplete, toggle_todos} from './../ActionCreators/AC';

import './eat.scss';



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
    this.props.Increment();
  };

  decrement = () => {
    this.props.decrement();
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



  // addItem = item => {
  //   this.setState({
  //     arr: [...this.state.arr, item ]
  //   })
  // };


  removeItem = type => () => {
    this.setState({
      arr: this.state.arr.filter( el => {
        return el.id !== type.id;
      })
    })
  };

  // toggleItem = type => item => {
    // const arr = this.state.arr.map( el => {
    //   if(el.id !== item.id) return el;
    //   return {...item, pakage: !item.pakage};
    // });
  // };




  allPac = () => {
    console.log(1);
    this.props.all_complete();
    // const arr = this.state.arr.map( item => {
    //   return {...item, pakage:true};
    // });
    //
    // this.setState({
    //   arr
    // })
  };


  allUnpac = () => {
    this.props.all_uncomplete();

    // const arr = this.state.arr.map( item => {
    //   return {...item, pakage:false}
    // });
    //
    // this.setState({ arr });

  };

  searchValue = val => {
    this.setState({
      searchValue: val
    })
  };






  render() {

    console.log('store', store.getState());

    const {count, arr, value, searchValue} = this.state;


    const {todos} = this.props;



    const pacTodos = todos.filter( el => {
      return el.completed;
    });

    // console.log(pacTodos);

    const unpacTodos = todos.filter( el => {
      return !el.completed;
    });



    return (
      <div className="counter">
        <h1>Count: {this.props.counter}</h1>
        <button onClick={()=> {this.increment()}}>increnent</button>
        <button onClick={()=> {this.decrement()}}>decrement</button>

        <Daypiker />
        <AddItem onSubmit={this.addItem} />
        <Search searchValue={this.searchValue}/>

        {
          pacTodos.length > 0 &&
            <div>
              <h3>Completed item: {pacTodos.length}</h3>
              <button onClick={this.allPac}>Completed</button>
            </div>
        }
            <Items
              searchValue={searchValue}
              todos={pacTodos}
              onRemove={this.removeItem}
            />






        {
          unpacTodos.length > 0 &&
            <div>
              <h3>Uncompleted items: {unpacTodos.length}</h3>
              <button onClick={this.allUnpac}>Uncompleted</button>
            </div>
        }

        <Items
          searchValue={searchValue}
          todos={unpacTodos}
          onRemove={this.removeItem}
        />





      </div>
    )
  }
}

export default connect(state => {
  return {
    counter: state.counter,
    todos: state.todos
  }},{Increment, decrement, all_complete, all_uncomplete, toggle_todos})(Eat);