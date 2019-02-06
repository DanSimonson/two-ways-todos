import React, {Component} from "react";
import './NewItems.css'
//import FlipMove from "react-flip-move";

class NewItems extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
 //NewItems = ({ newitems }) => {
    //<li key={newitems.id}>{newitems.text}</li>
    
    render(){
        return (
            <ul>                
                {this.props.newitems.map((todo) => <li key={todo.id}>{todo.text}</li>)}
            </ul>
        )
    }    
}
export default NewItems;
