import { useState } from 'react'
import reactLogo from './assets/pingas.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("red");
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Levi React Hideout</h1>
      <div className="card">
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Be patient, this is just the beginning of our journey. We will learn React together, step by step.
        </p>
      </div>
      <p className="read-the-docs">
     AAAAAAAAAAAAAAAAAAAAAAAA
      </p>
    </>
  )
}

export default App
