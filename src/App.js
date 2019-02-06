import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import InputTodo from './components/InputTodo';
import Header from './components/Header'
import TodoItems from './TodoItems'
import NewItems from './NewItems'
//import TodoItem from './components/TodoItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      //second todo state
      userInput: '',
      list: []
    }
    this.remove = this.remove.bind(this, 'Parameter');
  }

  addItem = (e) => {
    e.preventDefault();
    let newItem;
    if (this.inputElement.value !== "") {
      newItem = {
        text: this.inputElement.value,
        key: Date.now()
      };
    }
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
    //console.log('newArray: ', newArray)
    this.setState({
      list: newArray,
      userInput: ''
    })
  }
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  }
  remove = (todo, e) => {
    //console.log('todo: ', TodoItems)
    //console.log('todo text', e.text)
    //console.log('todo id', e.id)
    ///console.log('todo', {this.state.todo})
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
              <TodoItems entries={this.state.items}
                delete={this.deleteItem} />
            </div>
          </div>

          {/*----second todo----*/}
          <div className='two App'>
            <Header />
            <input type="text" value={this.state.userInput} onChange={this.handleChange} placeholder="enter task" />
            <button className="btn btn-primary" onClick={() => this.addTodo(this.state.userInput)}>Add Item</button>
            <ul>
              {this.state.list.map((todo) => <li onClick={(e) => this.remove(todo, e)} key={todo.id}>{todo.text}</li>)}
            </ul>
            {/*<NewItems newitems={this.state.list} updateParentID={this.updateID}/>*/}
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
