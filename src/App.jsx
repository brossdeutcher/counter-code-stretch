import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <>
    <h1>hello</h1>
    <Counter counter={counter} setCounter={setCounter} />
    </>
  )
}

export default App
