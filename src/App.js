import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import TodoItems from './TodoItems'
import FlipMove from "react-flip-move";
//import NewItems from './NewItems'
//import logo from './logo.svg';
//import TodoItem from './components/TodoItem'
//import InputTodo from './components/InputTodo';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      //second todo state
      userInput: '',
      list: []
    }
    this.remove = this.remove.bind(this, 'Parameter');
  }

  addItem = (e) => {
    e.preventDefault();
    let newTodo;
    if (this.inputElement.value !== "") {
      newTodo = {
        text: this.inputElement.value,
        key: Date.now()
      };
    }
    this.setState((prevState) => {
      return {
        todos: prevState.todos.concat(newTodo)
      };
    });
    this.inputElement.value = "";
  }
  deleteItem = (key) => {
    let filteredItems = this.state.todos.filter((todo) => {
      return (todo.key !== key);
    });

    this.setState({
      todos: filteredItems
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
    this.setState({
      list: newArray,
      userInput: ''
    })
  }
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  }
  remove = (todo, e) => {
    let filteredItems = this.state.list.filter((item) => {
      return (item.id !== e.id);
    });

    this.setState({
      list: filteredItems
    });
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
              <TodoItems entries={this.state.todos}
                delete={this.deleteItem} />
            </div>
          </div>

          {/*----second todo----*/}
          <div className='two App'>
            <Header />
            <input className='myInput' type="text" value={this.state.userInput} onChange={this.handleChange} placeholder="enter task" />
            <button className="btn btn-primary myBtn" onClick={() => this.addTodo(this.state.userInput)}>Add Item</button>
            <ul className='mapped-todos'>
              <FlipMove duration={250} easing="ease-out">
                {this.state.list.map((todo) =>
                  <li className='styleLi' onClick={(e) => this.remove(todo, e)} key={todo.id}>{todo.text}
                  </li>)}
              </FlipMove>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  /*{this.state.list.map((val) => {
              return (
                <ul>
                  <l1 key={val.id}>{val.text}</l1>
                </ul>
              );
            }
            )}*/
}

export default App;
