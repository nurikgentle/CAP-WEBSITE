import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import Signout from '../Signout'

function HomePage() {
   let navigate = useNavigate()
  return (
    <div className='root'>
     {/* NAVIGATION BAR
     <div className='navigation-bar'>
          <div className='logo'>
            <img src='images/logo.png' alt=''/>
          </div>
          <div className='four-links'>
            <a href='/katalog'>Каталог</a>
            <a href='/customs'>Кастомные</a>
            <a href='/brands'>Бренды</a>
            <a href='/aboutus'>О Нас</a>
          </div>
          <div className='input'>
            <input className='actual-input' type={"text"} placeholder={''} />
            <img className='loupe' src='images/loupe.png' alt=''/>
          </div>
          <div className='cart'>
            <img className='korzinka' src='images/cart.png' alt=''/>
          </div>
          <div className='hamburger'>
             <span className='bar'></span>
             <span className='bar'></span>
             <span className='bar'></span>
          </div>
     </div>
     {/* STRAIGHT LINE */}
     {/* <div className='straight-line'></div> */}
     {/* FIRST CONTAINER */}
     <Navbar />
     <div className='first-container'>
          <div className='left-side'>
              <div className='first-text'>
                <h1>NEW ERA</h1>
              </div>
              <div className='second-text'>
                <p>Новая коллекция 2021 уже доступны на заказ <span className='focku'>яркие цвета, винтажный принт 70х, тематические группы и отличное качество</span> </p>
              </div>
              <div className='third-text'>
                <Link to='/Catalog'><a href='  '><button>Открыть Каталог</button></a></Link> 
              </div>
              <img className='cap' src='images/cap.png' alt=''/>
              <img className='yellow' src='images/yellow.png' alt=''/>
          </div>
          <Signout />
          <div className='right-side'>
              <img className='huge-cap' src='images/huge cap.png' alt=''/>
              <img className='red-round' src='images/red round.png' alt=''/>
              <img className='back-cap' src='images/back cap.png' alt=''/>
          </div>
     </div>
      {/* SECOND CONTAINER */}
      <div className='second-container'>
         <div onClick={() => navigate('/Buy')} className='second-container-bloc'>
           <div className='left-div'>
              <img className='red-cap' src='images/red cap.png' alt=''/>
           </div>
           <div className='right-div'>
              <p className='twenty-one'>2021</p>
              <p className='new-era'>New Era</p>
              <p className='houston-rockets'>Houston Rockets</p>
              <k className='three-thousand'><strike>3000c</strike></k>
              <k className='ninety-nine'>2399c</k>
           </div>
        </div>
        <div onClick={() => navigate('/Buy')} className='second-container-block'>
           <div className='left-div'>
              <img className='red-cap' src='images/black cap.png' alt=''/>
           </div>
           <div className='right-div'>
              <p className='twenty-one'>2021</p>
              <p className='new-era'>New Era</p>
              <p className='houston-rockets'>Chicago WhiteSox</p>
              <k className='three-thousand'><strike>3000c</strike></k>
              <k className='ninety-nine'>2399c</k>
           </div>
        </div>
        <div onClick={() => navigate('/Buy')} className='second-container-block'>
           <div className='left-div'>
              <img className='red-cap' src='images/blue cap.png' alt=''/>
           </div>
           <div className='right-div'>
              <p className='twenty-one'>2021</p>
              <p className='new-era'>New Era</p>
              <p className='houston-rockets'>LA Lakers</p>
              <k className='three-thousand'><strike>3000c</strike></k>
              <k className='ninety-nine'>2399c</k>
           </div>
        </div>
      </div>
      {/* THIRD CONTAINER */}
      <div className='third-container'>
         <div onClick={() => navigate('/customs')} className='left-image'>
            <img className='image' src='images/left.svg' alt=''/>
         </div>
         <div onClick={() => navigate('/catalog')} className='right-image'>
            <img className='image' src='images/right.svg' alt=''/>
         </div>
      </div>
      {/* FOURTH CONTAINER */}
      <div className='fourth-container'>
         <p className='top-sellers'>TOP SELLERS</p>
      </div>
      {/* FIFTH CONTAINER */}
      <div className='fifth-container'>
         <div className='it-contains'>
            <img onClick={() => navigate('/Buy')} className='shapka' src='images/different.svg' alt=''/>
            <p onClick={() => navigate('/Buy')} className='odidas'>Adidas</p>
            <p onClick={() => navigate('/Buy')} className='san-francisco'>San Francisco Baseball</p>
            <p onClick={() => navigate('/Buy')} className='zero'>3800c</p>
         </div>
         <div className='it-contains'>
            <img onClick={() => navigate('/Buy')} className='shapka' src='images/reddd.svg' alt=''/>
            <p onClick={() => navigate('/Buy')} className='odidas'>New Era</p>
            <p onClick={() => navigate('/Buy')} className='san-francisco'>New York Yankies</p>
            <p onClick={() => navigate('/Buy')} className='zero'>3800c</p>
         </div>
         <div className='it-contains'>
            <img onClick={() => navigate('/Buy')} className='shapka' src='images/green.svg' alt=''/>
            <p onClick={() => navigate('/Buy')} className='odidas'>Nike</p>
            <p onClick={() => navigate('/Buy')} className='san-francisco'>French Fries Series</p>
            <p onClick={() => navigate('/Buy')} className='zero'>4500c</p>
         </div>
      </div>
      {/* SIXTH CONTAINER */}
      <div className='sixth-container'>
        <div className='levoe'>
            <div onClick={() => navigate('/Buy')} className='white'>
               <p className='blyat'>Supreme</p>
               <p className='cuka'>Liberty</p>
               <p className='fu'>5600c</p>
               <img className='blackness' src='images/black cap.svg' alt=''/>
            </div>
            <div onClick={() => navigate('/Buy')} className='white'>
               <p className='blyat'>Supreme</p>
               <p className='cuka'>Floral</p>
               <p className='fu'>5600c</p>
               <img className='blackness' src='images/strange cap.svg' alt=''/>
            </div>
            <div onClick={() => navigate('/Buy')} className='white'>
               <p className='blyat'>Supreme</p>
               <p className='cuka'>Playboy</p>
               <p className='fu'>5600c</p>
               <img className='blackness' src='images/kyzyl.svg' alt=''/>
            </div>
        </div>
        <div className='pravoe'>
            <div>
               <h1>SUPREME & NEW ERA</h1>
            </div>
            <div>
               <p>collobaration</p>
            </div>
            <div className='bitch'>
               <Link to='/Catalog'><a href='  '><button>Открыть каталог</button></a></Link> 
            </div>
            <img className='three-caps' src='images/three caps.svg' alt=''/>
            <img className='krug' src='images/rond.svg' alt=''/>
        </div>
      </div>
      {/* HIDDEN CONTAINER */}
      <div className='hidden-container'>
            <div>
               <h1>SUPREME & NEW ERA</h1>
            </div>
            <div>
               <p>collobaration</p>
            </div>
            <div>
               <button>Открыть каталог</button>
            </div>
      </div>
      {/* SEVENTH CONTAINER */}
      <div className='seventh-container'>
         <k className='key'>CUSTOM CUPS в цифрах</k>
         <p><span className='numbers'>12000</span> проданных кепок</p>
         <p><span className='numbers'>9</span> лет на рынке</p>
         <p><span className='numbers'>8500</span> довольных клиентов</p>
      </div>
      {/* STRAIGHT LINE */}
      {/* <div className='straigh-line'></div> */}
      {/* HIDDEN EIGHTH CONTAINER */}
      {/* <div className='hidden-eighth-container'>
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
               <a href='http://localhost:3000/aboutus'>О нас</a>
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
      </div> */}
      {/* HIDDEN STRAIGHT LINE */}
      {/* <div className='itsline'></div> */}
      {/* FOOTER */}
      {/* <div className='footer'>
         <div className='left-footer'>
            <img src='images/footer cap.png' alt=''/>
            <img className='two-columns' src='images/two columns.svg' alt=''/>
         </div>
         <div className='centered-footer'>
            <img className='centerrr' src='images/center.svg' alt=''/>
         </div>
         <div className='right-footer'>
            <img className='social-media' src='images/Linkedin.svg' alt=''/>
            <img className='social-media' src='images/Facebook.svg' alt=''/>
            <img className='social-media' src='images/Twitter.svg' alt=''/>
         </div>
      </div> */}
      {/* УФФФ ЗАКОНЧИЛИ */}







      <Footer />
    </div>
  )
}

export default HomePage