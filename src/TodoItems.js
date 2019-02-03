

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
    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
            key={item.key}>{item.text}</li>
    }

    render() {
        let entries = this.props.entries;
        //var listItems = todoEntries.map(this.createTasks);
        let listItems = entries.map(this.createTasks)
        return (
            <div>
                <ul className="theList">
                    <FlipMove duration={250} easing="ease-out">
                        {listItems}
                    </FlipMove>
                </ul>
            </div>
        );
    }
};

export default TodoItems;
