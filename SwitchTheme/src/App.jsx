import { useEffect, useState } from "react"
import './App.css'


function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme =() => {
    setTheme((prev) => (prev === 'light' ? 'dark' :'light'))
  }

  useEffect (() => {
    document.body.className = theme;
  },[theme])


  return (
    <div className="App">
      <button onClick={toggleTheme} >Change Theme</button>
    </div>
  )
}

export default App
