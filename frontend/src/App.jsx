import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Analytics } from '@vercel/analytics/react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Home />
        <Analytics />
      </div>
    </>
  )
}

export default App
