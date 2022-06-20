import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

function Footer() {
   let navigate = useNavigate()
  return (
    <div>
         {/* STRAIGHT LINE */}
      <div className='straigh-line'></div>
      {/* HIDDEN EIGHTH CONTAINER */}
      <div className='hidden-eighth-container'>
         <div className='upper-container'>
            <div className='production'>
               <p>Продукция</p>
               <a href='№'>Кепки</a>
               <a href='№'>Шапки</a>
               <a href='№'>Панамки</a>
               <a href='№'>Кастомизация</a>
               <a href='№'>Другая продукция</a>
               <a href='№'>Эксклюзив</a>
            </div>
            <div className='about-company'>
               <p>О компании</p>
               <a href='/aboutus'>О нас</a>
               <a href='$'>Контакты</a>
            </div>
            <div className='email-address'>
               <p>Подписаться на новинки</p>
               <input className='email-address-input' type={'text'} placeholder={'Email address'}/>
               <img className='yellow-square' src='images/fill.svg' alt=''/>
               <img className='pointer' src='images/path.svg' alt=''/>
            </div>
         </div>
         <div className='bottom-container'>
            <img className='yandex' src='images/yandex.svg' alt=''/>
            <img className='mastercard' src='images/Mastercard.svg' alt=''/>
            <img className='visa' src='images/visa.svg' alt=''/>
            <p className='number'>+996 755 999820</p>
         </div>
      </div>
      {/* HIDDEN STRAIGHT LINE */}
      <div className='itsline'></div>
      {/* FOOTER */}
      <div className='footer'>
         <div className='left-footer'>
            <img onClick={() => navigate('/Homepage')} src='images/footer cap.png' alt=''/>
            <img onClick={() => navigate('/Homepage')} className='two-columns' src='images/two columns.svg' alt=''/>
         </div>
         <div className='centered-footer'>
            <img className='centerrr' src='images/center.svg' alt=''/>
         </div>
         <div className='right-footer'>
            <a href='https://youtu.be/q7Xpzwve-Ro'><img  className='social-media' src='images/Linkedin.svg' alt=''/></a> 
            <a href='https://youtu.be/FC65UiWfwGM'><img className='social-media' src='images/Facebook.svg' alt=''/></a> 
            <a href='https://youtu.be/3wWErNdvKWk'><img className='social-media' src='images/Twitter.svg' alt=''/></a> 
         </div>
      </div>
      {/* УФФФ ЗАКОНЧИЛИ */}
    </div>
  )
}

export default Footer