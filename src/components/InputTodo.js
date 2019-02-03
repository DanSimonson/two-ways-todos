import React from 'react';
import './InputTodo.css';

export default class TodoInput extends React.Component {
    render() {
        return (
            <div>
                <input type='text'/>
                <button className="btn btn-primary">Add Item</button>
            </div>
        );
    }
}