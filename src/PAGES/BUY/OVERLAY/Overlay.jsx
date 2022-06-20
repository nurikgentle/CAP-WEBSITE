import React from 'react'
import './Overlay.css'

function Overlay() {
  return (
    <div>
        <div onClick={click => {
          if(click) {
            document.getElementById('overlay').style.display = 'none'
          }
        }} className='Overlay' id='overlay'>
        <div className='drawer'>
          <img src='/images/done.svg' alt='Done' />
          <p className='toxt'>Спасибо<br /> Ваш заказ принят<br /> Ожидайте с Вами скоро свяжутся</p>
          <a href='/'><button className='home-button'><a href='/Homepage'>На главную</a></button></a>
        </div>
      </div>
    </div>
  )
}

export default Overlay