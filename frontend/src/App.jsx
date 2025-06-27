import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Analytics } from '@vercel/analytics/next'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Analytics />
      <div>
        <Home />
      </div>
    </>
  )
}

export default App
