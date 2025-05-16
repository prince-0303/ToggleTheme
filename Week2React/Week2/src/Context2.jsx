import React, { useContext } from 'react'
import { MyContext } from './Context1'

const Context2 = () => {
    const {name,setName} = useContext(MyContext)
  return (
    <div>
        <h2>Name is {name}</h2>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
    </div>
  )
}

export default Context2