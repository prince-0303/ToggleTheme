import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {


    const counter = useSelector((state) => state.counter.value)

  return (
    <div>
        <h3> {counter} </h3>
    </div>
  )
}

export default Display