import React from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import Signout from '../Signout'
import Switcher from '../Switcher'

function Customs() {
  return (
    <div className='error-page'>
      <Navbar />
      <Switcher />
      <Signout />
      <h1>Cтраница Отсутствует ☹</h1>
      <Footer />
    </div>
  )
}

export default Customs