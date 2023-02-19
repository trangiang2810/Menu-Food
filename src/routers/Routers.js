import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Gallery from '../components/Gallery/Gallery'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import EventsDetails from '../pages/EventsDetails/EventsDetails'
import Home from '../pages/Home'
import Menu from '../pages/Menu/Menu'
import Events from '../components/Events/Events'
import Resevation from '../components/resevation/Resevation'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Menu-Food' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/events' element={<Events />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/resevation' element={<Resevation />} />
        <Route path='/event/:id' element={<EventsDetails />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default Routers