import React from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import Signout from '../Signout'
import Switcher from '../Switcher'

function ErrorPage() {
  return (
    <div className='error-page'>
      <Navbar />
      <Switcher />
      <Signout />
      <h1>Такой Страницы Нет 🤥</h1>
      <Footer />
    </div>
  )
}

export default ErrorPage