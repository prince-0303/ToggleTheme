import React from 'react'
import { Link } from 'react-router'

export const Example = () => {
  return (
    <div>Hi I am Example
        <Link to={"/abc"}><button>Abc</button></Link>
    </div>
  )
}
