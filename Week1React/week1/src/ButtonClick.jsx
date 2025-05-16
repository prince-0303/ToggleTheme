// import React, { useEffect, useRef } from 'react'

// function ButtonClick() {

//    const input  = useRef(null);

//    useEffect(() => {
//     input.current.focus
//    },[])

//     return (
//         <div>
//             Button Focus
//             <input ref={input} type="text" />
//         </div>

//     )
// }

// export default ButtonClick

import React, { useState, useEffect } from 'react';

function SimpleEffect() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = 'count : ' + count;
  },[])


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
    </div>
  );
}

export default SimpleEffect;