import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DayPlan from './pages/day-plan'
import DressCode from './pages/dress-code'
import Escape1 from './pages/escape1'
import Escape2 from './pages/escape2'
import Escape3 from './pages/escape3'
import Escape4 from './pages/escape4'
import Escape5 from './pages/escape5'
import Escape6 from './pages/escape6'
import Gift from './pages/gift'
import Home from './pages/home'
import ParkingAccommodation from './pages/parking-accommodation'
import Rsvp from './pages/rsvp'
import Welcome from './pages/welcome'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/password' element={<Escape1 />} />
        <Route path='/poem' element={<Escape2 />} />
        <Route path='/pigpen' element={<Escape3 />} />
        <Route path='/science' element={<Escape4 />} />
        <Route path='/maths' element={<Escape5 />} />
        <Route path='/riddle' element={<Escape6 />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/rsvp' element={<Rsvp />} />
        <Route path='/day-plan' element={<DayPlan />} />
        <Route path='/dress-code' element={<DressCode />} />
        <Route path='/gift' element={<Gift />} />
        <Route
          path='/parking-accommodation'
          element={<ParkingAccommodation />}
        />
      </Routes>
    </Router>
  )
}
