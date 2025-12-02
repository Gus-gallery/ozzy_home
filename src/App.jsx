import React from "react"
import { Route, Routes } from "react-router-dom"
import Landingpage from "./pages/Landingpage"
import Aboutpage from "./pages/Aboutpage"
import Projects from "./pages/Projects"

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
  )
}

export default App
