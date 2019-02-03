import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import InputTodo from './components/InputTodo';
import TodoItems from './TodoItems'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
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
    console.log('state items: ', this.state.items)

  }
  deleteItem = (key) => {
    let filteredItems = this.state.items.filter((item) => {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }
  render() {
    return (
      <div>
        <div className='grid'>
          <div className='one App '>
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
          <div className='two App'>
            <InputTodo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
