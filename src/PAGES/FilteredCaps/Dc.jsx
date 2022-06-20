import React from 'react'
import dataCaps from '../data/data' 
import { useNavigate } from 'react-router-dom';
import Switcher from '../Switcher';
import Navbar from '../NAVBAR/Navbar';
import Footer from '../FOOTER/Footer';


const p_Style = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '16px',
    letterSpacing: '-0.05em',
    color: '#847E7E',
    transform: 'translate(10px, -15px) '
}

const b_style = {
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '22px',
    color: '#FDDB16',
    position: 'absolute',
    transform: 'translate(180px, -60px)'
}

const h3_style = {
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '22px',
    color: '#847E7E',
    transform: 'translate(10px, 30px)'
}
const text_style = {
    transform: 'translateY(20px)',
    width: '270px',
    height: '102px',
    background: '#FFFFFF',
    border: '1px solid rgba(196, 196, 196, 0.5)',
    boxSizing: 'border-box',
    borderRadius: '25px'
}
const card_style = {
    width: '270px',
    height: '278px',
    background: '#F3F2F2',
    border: '1px solid rgba(196, 196, 196, 0.5)',
    boxSizing: 'border-box',
    borderRadius: '25px',
    transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
    cursor: 'pointer'
}

const content_style = {
    width: '90%'
}


const cap_img = {
    width: '218px',
    height: '158px'
}


function Dc() {

    let navigate = useNavigate()
  return (
    <div>
        
        <Navbar />
        <Switcher />
        <div style={content_style} className='content'>
                    <div className="d-flex justify-center mb-20" key={dataCaps[4].id} >
                        <div style={card_style} onClick={() => { navigate("/brands") }} className="cardr">
                            <img style={cap_img} className="cap-img" src={dataCaps[4].img} alt="Cap" />
                            <div style={text_style} className="text">
                                <h3 style={h3_style} className="mb-5">{dataCaps[4].brand}</h3>
                                <p style={p_Style}>{dataCaps[4].model}</p>
                                <b style={b_style}>{dataCaps[4].price}c</b>
                            </div>
                        </div>
                    </div>
            </div>
        <Footer />
    </div>
  )
}

export default Dc


