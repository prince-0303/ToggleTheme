import React, { useState } from 'react'

const Memo = () => {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const Add1 = () => {
        setCountOne(countOne + 1)
    }

    const Add2 = () => {
        setCountTwo(countTwo + 1)
    }

    

    const isEven = () => {

        let i = 0;
        while(i<20000);
        i++;

        return setCountOne % 2===0;
    }

  return (

    <>

    <button onClick={Add1} >{countOne}</button>
    <h2>{isEven()  ? 'Even' : 'Odd'}</h2>
    <button onClick={Add2} >{countTwo}</button>

    </>

  )
}

export default Memo