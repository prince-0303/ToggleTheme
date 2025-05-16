import React, { useState } from 'react'



    const Count = () => {
    const [count, Setcount] = useState(0)
    


  return (
    <div>
        <h2 style={count == 5 ? {backgroundColor:'red'} : {backgroundColor: ''}}>{count }</h2>
        <button onClick={() => Setcount( count + 1)}  style={ count%2 === 0 ? {backgroundColor:"red",color:'white'} : {backgroundColor: "black",color:'white'}}>increment</button>
    </div>
  )
}

export default Count