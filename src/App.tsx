import { useState } from 'react'
import './App.scss'
import SiteHeader from './app/common/header/SiteHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SiteHeader />
    </div>
  )
}

export default App
