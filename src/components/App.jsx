import React from "react";
import { useState } from "react";

function App() {
   const [array, yarray] = useState([]);
    const [text, taxt]= useState("");
    function change(event){
       taxt(event.target.value);
        
       // console.log(text);
    }
    function click(){
        yarray(x =>{
            return [...x, text];
        });
        taxt("");
      //  console.log(array);
    }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={change} name="to" value={text} />
        <button onClick={click} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map((x)=>{
            return <li>{x}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
