import React from 'react';
import Header from './components/Header';
import Todoitem from './components/Todoitem';
import Button from './components/Buttons';
import './style.css';
import Countercomponent from './components/Countercomponent';
const App=()=>{
return (
<div className="todo-container">
<Countercomponent></Countercomponent>
<Header title="Todo App"></Header>
<Todoitem text="Eat"></Todoitem>
<Todoitem text="Play" ></Todoitem>
<Todoitem  text="read"></Todoitem>
<Todoitem text="Write"></Todoitem>
<Todoitem text="Enjoy"></Todoitem>
<Button></Button>
</div>
)
}
export default App;
