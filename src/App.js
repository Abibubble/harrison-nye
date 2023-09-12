import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Welcome from './pages/welcome'
import Rsvp from './pages/rsvp'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/rsvp' element={<Rsvp />} />
      </Routes>
    </Router>
  )
}

export default App
