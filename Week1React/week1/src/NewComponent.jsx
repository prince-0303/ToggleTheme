import React, { useState } from 'react'

function ButtonClick (){

    const [count, setcount] = useState(0);

    const [hide, setHide] = useState(false);



    return (

        <div>
            <div style={{visibility:`${hide ? 'hidden' : 'visible'}`}}>
            <h1>Count : {count}</h1>
            </div>

            <button onClick={() => setcount(prevState => prevState +1 )} >increment</button>
        <button onClick={() => setcount(prevState => prevState - 1)}>decrement</button>
        <button onClick={() => setcount(prevState => prevState + 4 )}>increment 4</button>
        <button onClick={() => setcount(0)}>clear</button>

        

        <button onClick={() => setHide(!hide)} > { hide ? "unhide" : "hide"}</button>
        </div>
        
    )
}

export default ButtonClick

 

