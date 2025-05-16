import React, { useState } from 'react'

function Bgcolor() {

    const [state,setState] = useState("white")
    const handleClick = () => {
        const newColor = state === 'white' ? 'black' : 'white';
        setState(newColor);
        document.body.style.backgroundColor = newColor;
    }

  return (
    <div>
        <button onClick={handleClick}>
            Switch theme
        </button>
    </div>
  )
}

export default Bgcolor;