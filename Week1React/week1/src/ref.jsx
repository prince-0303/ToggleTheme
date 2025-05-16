import React,{useState} from 'react'

function Ref() {

    const [number,setNumber] = useState(0)

    function handleClick(){
        setNumber(number => number + 1)
    }
  return (
    <div>

        <button>
            {number}

        </button>
    </div>
  )
}

export default Ref