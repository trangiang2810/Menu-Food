import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Routers from './routers/Routers'


const App = () => {
  return (
    <div className='app'>
      <Navbar />
        <Routers />
      <Footer />
    </div>
  )
}

export default App 