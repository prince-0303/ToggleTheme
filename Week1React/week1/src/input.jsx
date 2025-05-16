import React,{useRef} from 'react'

function InputBox() {
    const inputRef = useRef(null)

    const handleClick =() => {
        inputRef.current.focus();
    }

  return (
    <div>
        <input ref={inputRef}  type="text" placeholder='Enter text ' />
        <button onClick={handleClick}>Input</button>
    </div>
  )
}

export default InputBox