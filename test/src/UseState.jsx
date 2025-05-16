import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
  return (
    <div>

        count is {count}

        <button onClick={setCount(count - 1 )}>decrement</button>
        <button onClick={setCount(count + 1 )}>increment</button>
    </div>
  )
}

export default Counter