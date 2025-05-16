import React, { useReducer } from 'react'

const initalState = 0;

const reducer = (state, action) => {
  switch(action.type){
    case 'Increment':
      return state + 1;
      case 'Decrement':
        return state - 1
        case 'clear':
          return initalState;
          default:
            return state;
  }
}
const UseReducer = () => {

  const [count, dispatch] = useReducer(reducer, initalState)

  return (
    <div>
      <div>Count : {count}</div>

      <button onClick={() => dispatch({type : 'Increment'})}>Increment</button>
    </div>
  )
}

export default UseReducer