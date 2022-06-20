import React from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import Signout from '../Signout'
import Switcher from '../Switcher'


function AboutUs() {
  return (
    <div className='error-page'>
      <Navbar />
      <Switcher />
      <Signout />
      <h1>МЫ КРУТЫ! 😎</h1>
      <Footer />
    </div>
  )
}

export default AboutUs