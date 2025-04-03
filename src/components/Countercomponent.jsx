import React,{useState} from 'react';
const Countercomponent=()=>{
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("Soumya");
    return(
   <div>
    <p>Count Component-{count}</p>
    <h6> Name is {value} </h6>
    <h6>Number is -{count%2===0?"Even":"Odd"}</h6>
    <button onClick={()=>setValue("React")}>Change</button>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
   </div>
    );
};
export default Countercomponent;