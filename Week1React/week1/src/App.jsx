import React from "react"
import Navbar from "./Components/Navbar"
import Registration from "./Components/Registration"
import Login from "./Components/Login"
import Home from "./Components/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App