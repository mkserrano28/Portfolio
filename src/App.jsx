import { useState } from 'react'
import './App.css'
import CCard from "./assets/pages/Card"
import Hero from "./assets/pages/Hero"
import Navbar from "./assets/pages/Navbar"
import Skill from "./assets/pages/Skill"
import Contact from "./assets/pages/Contact"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <CCard />
      <Skill />
      <Contact />
    </div>
  )
}

export default App
