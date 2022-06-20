import React, {useState} from 'react'
import './Brands.css'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../NAVBAR/Navbar';
import Footer from '../FOOTER/Footer';
import Signout from '../Signout';



function Brands() {

  let navigate = useNavigate()


  const [counter, setCounter] = useState(0); 
    
    //increase counter 
    const increase = (event) => { 
      setCounter(count => count + 1); 
      event.preventDefault(); 
    }; 
    
    //decrease counter 
    const decrease = (event) => { 
      if (counter > 0) { 
        setCounter(count => count - 1); 
      } 
      event.preventDefault(); 
    };


  return (
    <div>
        {/* UNDER NAV BAR */}
        <Navbar />
        <div className='under-nav-bar'>
          <Signout />
         <Link to="/"> <p className='home'><a className='home-datails' href=' '>H<b>OME</b></a></p></Link>
         <Link to="/"><a href='  '><img src='/img/Vector.svg' alt='Arrow' /></a></Link> 
        <Link to='/Catalog'> <p><a href='  '>Каталог</a></p></Link>
        <Link to='/Catalog'><a href='  '><img src='/img/Vector.svg' alt='Arrow' /></a></Link> 
        <Link to='/brands'> <p className='cat-datails'><a className='datails-color' href=' '>Детали продукта</a></p></Link>
      </div>

      {/* SECOND SECTION */}
      <div className='second-section'>
          <div className='left-part'>
          
            <div className='cap-example'>
              <div className='general-img'>
                <img src='/img/caps/capses/1.png'alt='Selected-cap' />
              </div>
              <div className='square'></div>
              <div className='cap-datails'>
                <img src='/img/caps/capses/2.png'alt='cap-datails' />
                <img src='/img/caps/capses/3.png'alt='cap-datails' />
                <img src='/img/caps/capses/4.png'alt='cap-datails' />
              </div>
              <div className='caps-squares'>
                  <div className='square'></div>
                  <div className='square'></div>
                  <div className='square'></div>
              </div>
            </div>
          </div>
          <div className='right-part'>
            <div className='cap-name'>
              <h3>New era</h3>
              <p>black snapback 59 fifty</p>
            </div>
            <div className='cap-names'>
              <h3>New era</h3>
              <p>black snapback 59 fifty</p>
            </div>
            <div className='sizes'>
                <div className='Caps-size'>
                  <div onClick={click => {
                    if(click) {
                      document.getElementById('pofig').style.fontWeight = 700
                      document.getElementById('pofig-m').style.fontWeight = 500
                      document.getElementById('pofig-l').style.fontWeight = 500
                      document.getElementById('pofig-xl').style.fontWeight = 500
                      document.getElementById("pofig").style.color = "black"
                      document.getElementById("pofig").style.fontSize = '30px'
                      document.getElementById("size1").style.borderColor= 'rgba(0, 0, 0, 1)'
                      document.getElementById("size2").style.borderColor= 'rgba(196, 196, 196, 1)'
                      document.getElementById("size3").style.borderColor= 'rgba(196, 196, 196, 1)'
                      document.getElementById("size4").style.borderColor= 'rgba(196, 196, 196, 1)'
                      document.getElementById("pofig-m").style.color = "#847E7E"
                      document.getElementById("pofig-m").style.fontSize = '24px'
                      document.getElementById("pofig-l").style.color = "#847E7E"
                      document.getElementById("pofig-l").style.fontSize = '24px'
                      document.getElementById("pofig-xl").style.color = "#847E7E"
                      document.getElementById("pofig-xl").style.fontSize = '24px'
                    } 
                  }} className='size' id='size1' ><p id='pofig'>S</p></div>
                  <div onClick={click => {
                    if(click) {
                      document.getElementById('pofig-m').style.fontWeight = 700
                      document.getElementById('pofig').style.fontWeight = 500
                      document.getElementById('pofig-l').style.fontWeight = 500
                      document.getElementById('pofig-xl').style.fontWeight = 500
                      document.getElementById("pofig-m").style.color = "black"
                      document.getElementById("pofig-m").style.fontSize = '30px'
                      document.getElementById("pofig-m").style.marginLeft = '-5px'
                      document.getElementById("size2").style.borderColor= 'rgba(0, 0, 0, 1)'
                      document.getElementById("size1").style.borderColor= 'rgba(196, 196, 196, 1)'
                      document.getElementById("size3").style.borderColor= 'rgba(196, 196, 196, 1)'
                      document.getElementById("size4").style.borderColor= 'rgba(196, 196, 196, 1)'
                      document.getElementById("pofig-l").style.color = "#847E7E"
                      document.getElementById("pofig-l").style.fontSize = '24px'
                      document.getElementById("pofig-xl").style.color = "#847E7E"
                      document.getElementById("pofig-xl").style.fontSize = '24px'
                      document.getElementById("pofig").style.color = "#847E7E"
                      document.getElementById("pofig").style.fontSize = '24px'
                    }
                  }} className='size' id='size2'><p id='pofig-m'>M</p></div>
                  <div onClick={click => {
                    if(click) {
                      document.getElementById('pofig-l').style.fontWeight = 700
                      document.getElementById('pofig-m').style.fontWeight = 500
                      document.getElementById('pofig').style.fontWeight = 500
                      document.getElementById('pofig-xl').style.fontWeight = 500
                      document.getElementById("pofig-l").style.color = "black"
                      document.getElementById("pofig-l").style.fontSize = '30px'
                      document.getElementById("pofig-l").style.marginLeft = '0'
                      document.getElementById("size3").style.borderColor= 'rgba(0, 0, 0, 1)'
                      document.getElementById("size4").style.borderColor= 'rgba(196, 196, 196, 1)'
                      document.getElementById("size2").style.borderColor= 'rgba(196, 196, 196, 1)'
                      document.getElementById("size1").style.borderColor= 'rgba(196, 196, 196, 1)'
                      document.getElementById("pofig-xl").style.color = "#847E7E"
                      document.getElementById("pofig-xl").style.fontSize = '24px'
                      document.getElementById("pofig").style.color = "#847E7E"
                      document.getElementById("pofig").style.fontSize = '24px'
                      document.getElementById("pofig-m").style.color = "#847E7E"
                      document.getElementById("pofig-m").style.fontSize = '24px'
                    }
                  }}  className='size' id='size3'><p className='two' id='pofig-l'>L</p></div>
                  <div onClick={click => {
                    if(click) {
                      document.getElementById('pofig-xl').style.fontWeight = 700
                      document.getElementById('pofig-m').style.fontWeight = 500
                      document.getElementById('pofig').style.fontWeight = 500
                      document.getElementById('pofig-l').style.fontWeight = 500
                      document.getElementById("pofig-xl").style.color = "black"
                      document.getElementById("pofig-xl").style.fontSize = '30px'
                      document.getElementById("size4").style.borderColor= 'rgba(0, 0, 0, 1)'
                      document.getElementById("size3").style.borderColor= 'rgba(196, 196, 196, 1)'
                      document.getElementById("size2").style.borderColor= 'rgba(196, 196, 196, 1)'
                      document.getElementById("size1").style.borderColor= 'rgba(196, 196, 196, 1)'
                      document.getElementById("pofig").style.color = "#847E7E"
                      document.getElementById("pofig").style.fontSize = '24px'
                      document.getElementById("pofig-m").style.color = "#847E7E"
                      document.getElementById("pofig-m").style.fontSize = '24px'
                      document.getElementById("pofig-l").style.color = "#847E7E"
                      document.getElementById("pofig-l").style.fontSize = '24px'
                    }
                  }}   className='size' id='size4'><p id='pofig-xl'>X</p></div>
                </div>
              </div>

              <div className='sizeses'>
                <div className='Caps-sizes'>
                  <div className='size'><p className='two'>L</p></div>
                  <div className='size'><p>Xl</p></div>
                </div>
            </div>
            <div className='counter'>
                <form>
                  <input type='submit' id='decrement' value='-' onClick={decrease}/>
                  <div className='count'>{counter}</div>
                  <input type='submit' id='increment' value='+'  onClick={increase}/>
                </form>
              <div className='square'></div>
              </div>
              <div className='sell'>
                <b>3200сом</b>
                <button onClick={() => navigate('/Buy')}>
                  <i>Добавить в корзину</i>
                </button>
              </div>
            </div>
          </div>
          <div className='card-text'>
            <h3>Похожие товары</h3>
          </div>
          {/* -------- */}
          <div className='fifth-container'>
            <div className='it-contains'>
                <img onClick={() => navigate('/Buy')} className='shapka' src='/img/caps/caper/5.png' alt=''/>
                <p onClick={() => navigate('/Buy')} className='odidas'>Adidas</p>
                <p onClick={() => navigate('/Buy')} className='san-francisco'>San Francisco Baseball</p>
                <p onClick={() => navigate('/Buy')} className='zero'>3800c</p>
            </div>
            <div className='it-contains'>
                <img onClick={() => navigate('/Buy')} className='shapka' src='img/caps/caper/6.png' alt=''/>
                <p onClick={() => navigate('/Buy')} className='odidas'>New Era</p>
                <p onClick={() => navigate('/Buy')} className='san-francisco'>New York Yankies</p>
                <p onClick={() => navigate('/Buy')} className='zero'>3800c</p>
            </div>
            <div className='it-contains'>
                <img onClick={() => navigate('/Buy')} className='shapka' src='img/caps/caper/7.png' alt=''/>
                <p onClick={() => navigate('/Buy')} className='odidas'>Nike</p>
                <p onClick={() => navigate('/Buy')} className='san-francisco'>French Fries Series</p>
                <p onClick={() => navigate('/Buy')} className='zero'>4500c</p>
            </div>
          </div>
          <div className='arrows'>
              <img onClick={() => navigate('/Catalog')} src='/img/VectorL.png' alt='Arrow' />
              <img onClick={() => navigate('/Catalog')} src='/img/VectorR.png' alt='Arrow' />
          </div>
          <div className='Added-button'>
            <button onClick={() => navigate('/Buy')} className='button'>
              <i>Товар добавлен в корзину</i>
            </button>
        </div>
        <Footer />
    </div>
  )
}

export default Brands