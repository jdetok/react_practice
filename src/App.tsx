import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [changeBy, setChangeBy] = useState(1);

  return (
    <>
      <div>
        <a href="https://jdeko.me" target="_blank">
          <img src="https://jdeko.me/img/pets/rosie.png" className="logo" alt="jdme" />
        </a>
        <a href="https://jdeko.me" target="_blank">
          <img src="https://jdeko.me/img/pets/guinness.png" className="logo" alt="jdme" />
        </a>
        <a href="https://jdeko.me" target="_blank">
          <img src="https://jdeko.me/img/pets/milk.png" className="logo" alt="jdme" />
        </a>
      </div>
      <h1>react practice</h1>
      <div>increase by:</div>
      <input type="number" value={changeBy} onChange={(e) => setChangeBy(Number(e.target.value))} />
      <div className="card">
        <button onClick={() => setCount((count) => count + changeBy)}>
          count + {changeBy}
        </button>
        <button onClick={() => setCount((count) => count - changeBy)}>
          count - {changeBy}
        </button>
        <p>
          count is {count}
        </p>
      </div>
    </>
  )
}

export default App;
