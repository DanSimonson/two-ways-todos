import React from 'react';
//import './InputTodo.css';

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: this.props.todoText };
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }
    addTodo = (todo) => {
        //console.log("todo: ", todo);
        if (todo.length > 0) {
            console.log('todo: ', todo)
            console.log('todo props: ', this.props.addTodo)
            this.props.addTodo(todo);
            this.setState({ value: '' });
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Add Item</button>
            </div>
        );
    }
}