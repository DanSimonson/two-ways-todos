import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import InputTodo from './components/InputTodo';
import Header from './components/Header'
import TodoItems from './TodoItems'
//import TodoItem from './components/TodoItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      //second todo state
      userInput: '',
      list: [],
      nextId: 0
    }

    //this.addItem = this.addItem.bind(this);
  }

  addItem = (e) => {
    e.preventDefault();
    let newItem;
    //console.log(this.inputElement.value)
    if (this.inputElement.value !== "") {
      //console.log('input element: ', this.inputElement.value)
      newItem = {
        text: this.inputElement.value,
        key: Date.now()
      };
      //console.log('newItem: ', newItem)
    }
    //console.log('newItem: ', newItem)
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
    this.inputElement.value = "";
    //console.log('state items: ', this.state.items)
  }
  deleteItem = (key) => {
    let filteredItems = this.state.items.filter((item) => {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }
  /*****methods for second todo list*****/
  addTodo = (todoText) => {
    let newArray = this.state.list
    let d = new Date();
    let aTodo = {
      text: todoText,
      id: d
    }
    newArray.push(aTodo)
    console.log('newArray: ', newArray)
    this.setState({ list: newArray })

  }
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  }
  remove = (id) => {
    console.log('remove todo: ', id);
  }
  /*end second todo list methods*/
  render() {
    return (
      <div>
        <div className='grid'>
          <div className='one App '>
            <Header />
            <div className="todoListMain">
              <div className="header">
                <form onSubmit={this.addItem}>
                  <input ref={(a) => this.inputElement = a}
                    placeholder="enter task">
                  </input>
                  <button className='btn btn-primary' type="submit">Add Item</button>
                </form>
              </div>
              <TodoItems entries={this.state.items}
                delete={this.deleteItem} />
            </div>
          </div>

          {/*----second todo----*/}
          <div className='two App'>
            <Header />
            <input type="text" value={this.state.userInput} onChange={this.handleChange} />
            <button className="btn btn-primary" onClick={() => this.addTodo(this.state.userInput)}>Add Item</button>
            {this.state.list.map((val) => {
              return (
                <ul>
                  <l1 key={val.id}>{val.text}</l1>
                </ul>
              );
            }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
