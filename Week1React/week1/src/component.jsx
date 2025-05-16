import React,{useState} from 'react'

function Component() {

  const [state, setState] = useState(0)


  return (
    <div>
      <h1>count : {state}</h1>
      <button onClick={() => setState(state +1)}>increment</button>
      <button onClick={() => setState(state > 0 ? state-1 : state)}>decrement</button>
    </div>
    
  )
}

export default Component