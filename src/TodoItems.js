

import React, { Component } from "react";
import './TodoItems.css'
import FlipMove from "react-flip-move";

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }
    createTasks(todo) {
        return <li onClick={() => this.delete(todo.key)}
            key={todo.key}>{todo.text}</li>
    }

    render() {
        let entries = this.props.entries;
        //var listItems = todoEntries.map(this.createTasks);
        let list = entries.map(this.createTasks)
        return (
            <div>
                <ul className="theList">
                    <FlipMove duration={250} easing="ease-out">
                        {list}
                    </FlipMove>
                </ul>
            </div>
        );
    }
};

export default TodoItems;
