import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state+1;
            case 'decrement':
                return state-1;
                case 'clear' :
                    return initialState;
                    default :
                    return state; 
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h2>count :{state}</h2>
        <button onClick={()=> dispatch('increment')} >increment</button>
    </div>
  )
}

export default UseReducer