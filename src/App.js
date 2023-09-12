import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Welcome from './pages/welcome'
import Rsvp from './pages/rsvp'
import Escape2 from './pages/escape2'
import Escape3 from './pages/escape3'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/escape2' element={<Escape2 />} />
        <Route path='/escape3' element={<Escape3 />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/rsvp' element={<Rsvp />} />
      </Routes>
    </Router>
  )
}

export default App
