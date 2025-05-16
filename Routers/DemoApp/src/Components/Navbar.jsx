import React, { useContext} from 'react'
import { MyContext } from '../Context';

const Navbar = () => {
  const name = useContext(MyContext);
  return (
    <div>
      <h2>Name = {name}</h2>
    </div>
  )
}

export default Navbar