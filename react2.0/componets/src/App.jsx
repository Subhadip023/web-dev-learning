import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className="container">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi a, enim possimus cum non minima magnam aut fugiat voluptatem praesentium doloremque laboriosam nulla. Consectetur enim molestiae corporis! Ipsum dolor vel ea beatae corrupti facere necessitatibus fugiat, sapiente officia nesciunt iusto.
    </div>
    </>
  )
}

export default App
