import React from 'react'
import Popular from '../CATALOG/Popular'
import dataCaps from '../data/data';
import { useState } from 'react'
import Navbar from '../NAVBAR/Navbar';
import Footer from '../FOOTER/Footer';
import Signout from '../Signout';


function Morecaps() {

  const [data, setData] = useState(dataCaps)  
    
  return (
    <div>
      <Navbar />
        <Signout />
        <h1 className='morecaps'>ТУТ ЕЩЕ БОЛЬШЕ КЕПОК! 😁</h1>
        <Popular data={data} />
        <Popular data={data} />
        <Popular data={data} />
        <Popular data={data} />
        <Popular data={data} />
        <Popular data={data} />
        <Popular data={data} />
        <Popular data={data} />
      <Footer /> 
    </div>
  )
}

export default Morecaps