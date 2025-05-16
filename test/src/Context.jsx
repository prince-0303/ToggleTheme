import React from 'react'
import { Link } from 'react-router'

export const Context = () => {
    return (
        <div>
           <Link to={"/example"}>
           <button>Example</button>
           </Link> 
        </div>
    )
}
