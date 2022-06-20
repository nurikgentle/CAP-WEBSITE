import React, { useState } from 'react';
import Burger from './Burger';
import './Navbar.css';
import { Link } from 'react-router-dom';
import dataCaps from '../data/data';



function Navbar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([])

    const handleFilter = (event) => {
      const searchWord = event.target.value
      const newFilter = dataCaps.filter((value) => {
        return value.brand.toLowerCase().includes(searchWord.toLowerCase())
      });

      if (searchWord === '') {
        setFilteredData([])
      } else {
        setFilteredData(newFilter) 
      }
       
    }

  return (
    <div>
             {/* NAVIGATION BAR */}
     <div className='navigation-bar'>
          <div className='logo'>
            <Link  onClick={click => {
              if(click) {
                document.getElementById("navbar-4").style.borderBottom = "none"
                document.getElementById("navbar-3").style.borderBottom = 'none'
                document.getElementById("navbar-2").style.borderBottom = 'none'
                document.getElementById("navbar-1").style.borderBottom = 'none'
              }
            }} to="/Homepage"> <img src='images/logo.png' alt=''/> </Link>
          </div>
          <div className='four-links' id='burger'>
            <Link id='navbar-1' onClick={click => {
              if(click) {
                document.getElementById("navbar-1").style.borderBottom = "2px solid black"
                document.getElementById("navbar-2").style.borderBottom = 'none'
                document.getElementById("navbar-3").style.borderBottom = 'none'
                document.getElementById("navbar-4").style.borderBottom = 'none'
                // document.getElementById("burger").style.backgroundColor = "transparent"
                // document.getElementById('burger').style.display = "none"
              } 
            }} to='/Catalog '>Каталог</Link>
            <Link id='navbar-2'  onClick={click => {
              if(click) {
                document.getElementById("navbar-2").style.borderBottom = "2px solid black"
                document.getElementById("navbar-1").style.borderBottom = 'none'
                document.getElementById("navbar-3").style.borderBottom = 'none'
                document.getElementById("navbar-4").style.borderBottom = 'none'
                // document.getElementById("burger").style.backgroundColor = "transparent"
                // document.getElementById('burger').style.display = "none"
              }
            }} to='/customs '>Кастомные</Link>
            <Link id='navbar-3'  onClick={click => {
              if(click) {
                document.getElementById("navbar-3").style.borderBottom = "2px solid black"
                document.getElementById("navbar-4").style.borderBottom = 'none'
                document.getElementById("navbar-2").style.borderBottom = 'none'
                document.getElementById("navbar-1").style.borderBottom = 'none'
                // document.getElementById("burger").style.backgroundColor = "transparent"
                // document.getElementById('burger').style.display = "none"
              }
            }} to='/brands '>Бренды</Link>
            <Link id='navbar-4'  onClick={click => {
              if(click) {
                document.getElementById("navbar-4").style.borderBottom = "2px solid black"
                document.getElementById("navbar-3").style.borderBottom = 'none'
                document.getElementById("navbar-2").style.borderBottom = 'none'
                document.getElementById("navbar-1").style.borderBottom = 'none'
                // document.getElementById("burger").style.backgroundColor = "transparent"
                // document.getElementById('burger').style.display = "none"
              }
            }} to='/aboutus '>О Нас</Link>
          </div>
          <div className='input'>
            <input className='actual-input' type={"text"} placeholder={'поиск'} onChange={handleFilter} />
            <img className='loupe' src='images/loupe.png' alt=''/>
          </div>
          { filteredData.length !== 0 && (
          <div className='dataResult'>
            {filteredData.slice(0, 16).map((value, key) => {
                return  <a className='dataItem' href={value.link}>
                          <p>{value.brand}</p>
                        </a>
            })}
          </div>
          )}
          <div className='cart'>
            <Link onClick={click => {
              if(click) {
                document.getElementById("navbar-4").style.borderBottom = "none"
                document.getElementById("navbar-3").style.borderBottom = 'none'
                document.getElementById("navbar-2").style.borderBottom = 'none'
                document.getElementById("navbar-1").style.borderBottom = 'none'
              }
            }} to="/Buy"> <img className='korzinka' id='korzinka' src='images/cart.png' alt=''/>  </Link>
          </div>
          {/* <div className='hamburger'>
             <span className='bar'></span>
             <span className='bar'></span>
             <span className='bar'></span>
          </div> */}
          <Burger />
     </div>
     {/* STRAIGHT LINE */}
     <div className='straight-line'></div>
    </div>
  )
}

export default Navbar