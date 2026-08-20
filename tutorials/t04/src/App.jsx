import { useState } from 'react'
import ScoreBoard from './components/ScoreBoard.jsx'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="app-container">
      <h1>
        Tutorial 4: State and Effects
      </h1>
      <ScoreBoard/>
    </div>
    </>
  )
}

export default App
