import { useState } from "react";
import "./App.css";
import Cards from "./component/Cards";

function App() {
  let [counter,setCounter]= useState(0);

  // let ct=0;
  const addone=()=>{
    // ct=ct+1;
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    // above code will increse value by 1 because this will pass in batches with same value and they all will return same value

    // to update it multiple time we have to use property of usestate, as usestate is a method so we can pass a callback, it will fetch the most recent value of counter.
    setCounter(prevCounter=> prevCounter+1);
    setCounter(prevCounter=> prevCounter+1);
    setCounter(prevCounter=> prevCounter+1);
    setCounter(prevCounter=> prevCounter+1);
  }
  const removeone=()=>{
    // ct-=1;
    counter-=1
    setCounter(counter)
  }

  return (
    <div>
      <h1 className=" text-3xl ">counter : {counter}</h1>
      <button onClick={addone} className="px-2.5 border-4 rounded-2xl  m-4">
        increse value
      </button>
      <button onClick={removeone} className="px-2.5 border-4 rounded-2xl ">
        decrese value
      </button>
      <Cards  name="Rishu"/>
      <Cards />
    </div>
  );
}

export default App
