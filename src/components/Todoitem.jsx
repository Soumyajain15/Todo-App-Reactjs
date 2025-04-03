import React from "react";
const Todoitem=(props)=>{
    return (
<li className="todo-item">
    {props.completed ? <></>:<input type="checkbox" />}
    <span className="todo-item-text">{props.text}</span>
    <p>...</p>

</li>
    )
}
export default Todoitem;