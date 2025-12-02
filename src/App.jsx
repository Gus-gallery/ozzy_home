import React from "react"
import { Route, Routes } from "react-router-dom"
import Landingpage from "./pages/Landingpage"
import Aboutpage from "./pages/Aboutpage"
import Highlight from "./pages/Highlight"
import Projects from "./pages/Projects"
import Denmark from "./Projects/Denmark"
import Norway from "./Projects/Norway"
import Tanzania from "./Projects/Tanzania"

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/highlights" element={<Highlight />} />
        <Route path="/projects/denmark" element={<Denmark />} />
        <Route path="/projects/norway" element={<Norway />} />
        <Route path="/projects/tanzania" element={<Tanzania />} />
      </Routes>
    </main>
  )
}

export default App
