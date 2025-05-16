import React, { createContext, useState } from 'react'
import Context2 from './Context2';

export const MyContext = createContext();

const Context1 = () => {
    const [name,setName] = useState('')
  return (
    <div>
        <MyContext.Provider value={{name, setName}}>
            <Context2/>
        </MyContext.Provider>
    </div>
  )
}

export default Context1