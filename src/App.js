import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DayPlan from './pages/day-plan'
import DressCode from './pages/dress-code'
import Escape2 from './pages/escape2'
import Escape3 from './pages/escape3'
import Escape4 from './pages/escape4'
import Escape5 from './pages/escape5'
import Escape6 from './pages/escape6'
import Escape7 from './pages/escape7'
import Escape8 from './pages/escape8'
import Gift from './pages/gift'
import Home from './pages'
import Rsvp from './pages/rsvp'
import Welcome from './pages/welcome'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/poem' element={<Escape2 />} />
        <Route path='/escape3' element={<Escape3 />} />
        <Route path='/pigpen' element={<Escape4 />} />
        <Route path='/science' element={<Escape5 />} />
        <Route path='/maths' element={<Escape6 />} />
        <Route path='/escape7' element={<Escape7 />} />
        <Route path='/riddle' element={<Escape8 />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/rsvp' element={<Rsvp />} />
        <Route path='/day-plan' element={<DayPlan />} />
        <Route path='/dress-code' element={<DressCode />} />
        <Route path='/gift' element={<Gift />} />
      </Routes>
    </Router>
  )
}
