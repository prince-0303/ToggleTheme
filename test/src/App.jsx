// import { useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router";

import { Context } from "./Context";
// import Calculator from "./calculator";

import { Example } from "./Example";
import { Abc } from "./Abc";
// import Counter from "./reducer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <Counter />
    // <UseReducer />
    
    // <Calculator />
    // <FetchData />


<BrowserRouter>
<Routes>
  <Route path="/" element={<Context />} />
  <Route path="/example" element={<Example/>} />
  <Route path="/abc" element={<Abc />} />
</Routes>
</BrowserRouter>


  );
}

export default App
