import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Login from './login'

const Home = () => {
  return (

    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} />
        </Routes>
        <Link to={'/login'}><button>Login</button></Link>
        </BrowserRouter>
    </div>
  )
}

export default Home