import React, { useState } from 'react'
const App = () => {
    const[input,setInput]=useState('');
    const[result,setResult]=useState();
  return (
    
        <center>
            <h3 >Calculator Application With Arithmatic Opearations</h3>
              <div className='container'>
              <h1 className='text-success mt-5 bg-light'>Result is {result}</h1>
            
                    
           <input 
           type='text' 
           onChange={(e)=>setInput(e.target.value)} 
           value={input} 
           className='mt-3 mb-3  input' />
          
            <br/>
            <button 
            onClick={()=>setResult(eval(input))} 
            style={{fontWeight:'bold'}}  
            className='btn btn-primary mb-4'>
              Check Result
              </button><br/>

            <button onClick={() => setInput(input+'1')} className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>1</button>
            <button onClick={() => setInput(input+'2')} className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>2</button>
            <button onClick={() => setInput(input+'3')} className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>3</button>
            <button onClick={() => setInput(input+'4')} className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>4</button>
            <button onClick={() => setInput(input+'5')} className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>5</button><br/>
            <button onClick={() => setInput(input+'6')} className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>6</button>
            <button onClick={() => setInput(input+'8')} className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>8</button>
            <button onClick={() => setInput(input+'9')} className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>9</button>
            <button onClick={() => setInput(input+'0')}className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>0</button>

            <button onClick={() => setInput(input+'+')} className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>+</button><br/>
            <button onClick={() => setInput(input+'-')} className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>-</button>
            <button onClick={() => setInput(input+'*')} className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>*</button>
            <button onClick={() => setInput(input+'/')} className='btn btn-dark' style={{fontWeight:'bold',fontSize:'25px'}}>/</button>
            <button onClick={() => setInput('')} className='btn btn-danger' style={{fontWeight:'bold',fontSize:'25px'}}>CLR</button>
        
        </div>
        
        </center>
      

        
  
  )
}

export default App