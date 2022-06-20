import React, { useState } from 'react'
import Footer from '../FOOTER/Footer';
import Navbar from '../NAVBAR/Navbar';
import Signout from '../Signout';
import Switcher from '../Switcher';
import './Buy.css';
import Overlay from './OVERLAY/Overlay';


function Buy() {

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
    <div className='Carter'>
      <Navbar />
      < Overlay />
      <Switcher />
        <hr />
      <div className='first-sectioner'>
        <Signout />
        <div className='Li-part'>
          <img className='caper' width={144} height={96} src='/img/caps/capses/cap.png' alt='Cap' />
          <div className='counterer'>
                <form>
                  <input type='submit' id='decrement' value='-' onClick={decrease} />
                  <div className='counts'>{counter}</div>
                  <input type='submit' id='increment' value='+' onClick={increase}  />
                </form>
              <div className='squareer'></div>
            </div>
            <div className='sizeser'>
              <div className='Caps-sizeer'>
                <p className='twoer'>L</p>
              </div>
              <div className='squareser'>
                <div className='squareer'  id='threeer'></div>
              </div>
              </div>
        </div>
        <div className='Ri-part'>
          <div className='cap-nameer'>
                <h3>New era</h3>
                <p>black snapback 59 fifty</p>
              </div>
              <div className='prais'>
            <b>3200сом</b>
          </div>
          <div className='praises'>
            <b>3200сом</b>
          </div>
          </div>
      </div>
      <hr />
      <div className='second-sectioner'>
        <div className='register'>
          <h2>Ваша информация</h2>
          <div className='inputs'>
            <input type='text' placeholder='Имя'  />
            <input type='text' placeholder='+996 777 888 999'  />
          </div>
        </div>
        <div className='buy'>
          <button onClick={click =>{
            if(click) {
              document.getElementById('overlay').style.display = 'flex'
            }
          }} className='buy-button'>
            <p>Купить</p>
          </button>
        </div>
      </div>
      <Overlay />
      <Footer />
    </div>
  )
}

export default Buy;
