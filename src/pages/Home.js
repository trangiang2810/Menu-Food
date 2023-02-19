import React from 'react'
import Evaluate from '../components/Evaluate/Evaluate'
import Events from '../components/Events/Events'
// import About from './About'
import Gallery from '../components/Gallery/Gallery'
import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu'
import Resevation from '../components/resevation/Resevation'

const Home = () => {
  return (
    <div>
      <Header /> 
      <Menu />
      <Gallery />
      <Resevation />
      <Evaluate />
      <Events />
    </div>
  )
}

export default Home