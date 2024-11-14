import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step , setStep] =useState(0);

  const hanldePlus = ()=>{
    setCount(count+step);
  }

  const hanldeMinus = ()=>{
    setCount(count-step);
  }

  const hanldeReset = ()=>{
    setCount(0);
    setStep(0);
  }
 

  return (
    <>
    <h1>React Counter App</h1>
    <div className='main_container'>
      <p style={{fontSize:"20px", fontWeight:"bold"}}>{count}</p>
      <label htmlFor="data" style={{fontSize:"20px" , fontWeight:"bold" ,marginRight:"5px"}} >Enter Your Values:</label>
      <input type="number" id='data' value={step} onChange={(e)=>setStep(parseInt(e.target.value))} style={{marginBottom:"15px", fontSize:"15px"}} /><br/>
      <button onClick={hanldePlus} style={{backgroundColor:"green"}}  disabled={count >= 100} >Increment</button>
      <button onClick={hanldeMinus} style={{backgroundColor:"red",  margin:"5px"}} disabled={count <= 0} >Decrement</button>
      <button onClick={hanldeReset} style={{backgroundColor:"lightgrey"}}>Reset</button>
    </div>
    </>
  )
}

export default App
