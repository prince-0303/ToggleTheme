import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, reset } from './CounterSlice'

const Buttons = () => {

    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => dispatch(increment())} >increment</button>
        <button onClick={() => dispatch(decrement())} >decrement</button>
        <button onClick={() => dispatch(reset())} >reset</button>
    </div>
  )
}

export default Buttons