import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Manager from './components/Manager'

const App = () => {
  return (
    <div className='bg-mauve-950 h-screen'>
      <Navbar />
      <Manager />
      <Footer />
    </div>
  )
}

export default App