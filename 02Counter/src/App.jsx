
import "./App.css";
import { useState } from "react";




function App() {
  
  let [counter ,setcounter] = useState(15);
  function addon()
{
  if((counter+1)<=20){setcounter(counter+1);}
}

function substract()
{
 if((counter-1>=0)){ setcounter(counter-1);}
}
  return (
    
    <>
  
    <h1>Counter</h1>
    <h2 id="showNumber">{counter}</h2>
    <button id="incre" onClick={addon}>+</button>
    <button id="decre" onClick={substract}>-</button>

  </>)
}

export default App;
