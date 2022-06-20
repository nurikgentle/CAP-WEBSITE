import React from 'react'
import {Link} from 'react-router-dom'

function Switcher() {
  return (
    <div>
         {/* UNDER NAV BAR */}
         <div className='under-nav-bar'>
         <Link to="/Homepage"> <p className='home'><a className='home-datails' href=' '>H<b>OME</b></a></p></Link>
         <Link to="/Homepage"><a href=' 4 '><img src='/img/Vector.svg' alt='Arrow' /></a></Link> 
        <Link to='/Catalog'> <p><a href='  '>Каталог</a></p></Link>
        <Link to='/Catalog'><a href='  '><img src='/img/Vector.svg' alt='Arrow' /></a></Link> 
        <Link to='/brands'> <p className='cat-datails'><a className='datails-color' href=' '>Детали продукта</a></p></Link>
      </div>
    </div>
  )
}

export default Switcher