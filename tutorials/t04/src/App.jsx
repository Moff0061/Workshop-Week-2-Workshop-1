import { useState } from 'react'
import ScoreBoard from './components/ScoreBoard.jsx'
import UserForm from './components/Userform.jsx'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <h1>
          Tutorial 4: State and Effects
        </h1>
        <ScoreBoard/>
        <UserForm/>
      </div>
    </>
  )
}

export default App