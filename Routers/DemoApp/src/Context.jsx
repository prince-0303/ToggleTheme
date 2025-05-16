import React, { createContext } from 'react'
import Navbar from './Components/Navbar';

export const MyContext = createContext();
const Context = () => {
  return (

    <div>
      <MyContext.Provider value={'prince'}>
        <Navbar/>
      </MyContext.Provider>
    </div>
  )
}

export default Context