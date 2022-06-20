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
    transform: 'translate(10px, 0px) '
}

const b_style = {
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '22px',
    color: '#FDDB16',
    position: 'absolute',
    transform: 'translate(180px, 0px)'
}

const h3_style = {
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '22px',
    color: '#847E7E',
    transform: 'translate(10px, 50px)'
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


function Newera() {

    let navigate = useNavigate()
  return (
    <div>
        
        <Navbar />
        <Switcher />
        <div style={content_style} className='content'>
                    <div className="d-flex justify-center mb-20" key={dataCaps[1].id} >
                        <div style={card_style} onClick={() => { navigate("/brands") }} className="cardr">
                            <img style={cap_img} className="cap-img" src={dataCaps[1].img} alt="Cap" />
                            <div style={text_style} className="text">
                                <h3 style={h3_style} className="mb-5">{dataCaps[1].brand}</h3>
                                <p style={p_Style}>{dataCaps[1].model}</p>
                                <b style={b_style}>{dataCaps[1].price}c</b>
                            </div>
                        </div>
                    </div><div className="d-flex justify-center mb-20" key={dataCaps[2].id} >
                        <div style={card_style} onClick={() => { navigate("/brands") }} className="cardr">
                            <img style={cap_img} className="cap-img" src={dataCaps[2].img} alt="Cap" />
                            <div style={text_style} className="text">
                                <h3 style={h3_style} className="mb-5">{dataCaps[2].brand}</h3>
                                <p style={p_Style}>{dataCaps[2].model}</p>
                                <b style={b_style}>{dataCaps[2].price}c</b>
                            </div>
                        </div>
                    </div><div className="d-flex justify-center mb-20" key={dataCaps[3].id} >
                        <div style={card_style} onClick={() => { navigate("/brands") }} className="cardr">
                            <img style={cap_img} className="cap-img" src={dataCaps[3].img} alt="Cap" />
                            <div style={text_style} className="text">
                                <h3 style={h3_style} className="mb-5">{dataCaps[3].brand}</h3>
                                <p style={p_Style}>{dataCaps[3].model}</p>
                                <b style={b_style}>{dataCaps[3].price}c</b>
                            </div>
                        </div>
                    </div><div className="d-flex justify-center mb-20" key={dataCaps[7].id} >
                        <div style={card_style} onClick={() => { navigate("/brands") }} className="cardr">
                            <img style={cap_img} className="cap-img" src={dataCaps[7].img} alt="Cap" />
                            <div style={text_style} className="text">
                                <h3 style={h3_style} className="mb-5">{dataCaps[7].brand}</h3>
                                <p style={p_Style}>{dataCaps[7].model}</p>
                                <b style={b_style}>{dataCaps[7].price}c</b>
                            </div>
                        </div>
                    </div><div className="d-flex justify-center mb-20" key={dataCaps[12].id} >
                        <div style={card_style} onClick={() => { navigate("/brands") }} className="cardr">
                            <img style={cap_img} className="cap-img" src={dataCaps[12].img} alt="Cap" />
                            <div style={text_style} className="text">
                                <h3 style={h3_style} className="mb-5">{dataCaps[12].brand}</h3>
                                <p style={p_Style}>{dataCaps[12].model}</p>
                                <b style={b_style}>{dataCaps[12].price}c</b>
                            </div>
                        </div>
                    </div><div className="d-flex justify-center mb-20" key={dataCaps[13].id} >
                        <div style={card_style} onClick={() => { navigate("/brands") }} className="cardr">
                            <img style={cap_img} className="cap-img" src={dataCaps[13].img} alt="Cap" />
                            <div style={text_style} className="text">
                                <h3 style={h3_style} className="mb-5">{dataCaps[13].brand}</h3>
                                <p style={p_Style}>{dataCaps[13].model}</p>
                                <b style={b_style}>{dataCaps[13].price}c</b>
                            </div>
                        </div>
                    </div><div className="d-flex justify-center mb-20" key={dataCaps[14].id} >
                        <div style={card_style} onClick={() => { navigate("/brands") }} className="cardr">
                            <img style={cap_img} className="cap-img" src={dataCaps[14].img} alt="Cap" />
                            <div style={text_style} className="text">
                                <h3 style={h3_style} className="mb-5">{dataCaps[14].brand}</h3>
                                <p style={p_Style}>{dataCaps[14].model}</p>
                                <b style={b_style}>{dataCaps[14].price}c</b>
                            </div>
                        </div>
                    </div><div className="d-flex justify-center mb-20" key={dataCaps[15].id} >
                        <div style={card_style} onClick={() => { navigate("/brands") }} className="cardr">
                            <img style={cap_img} className="cap-img" src={dataCaps[15].img} alt="Cap" />
                            <div style={text_style} className="text">
                                <h3 style={h3_style} className="mb-5">{dataCaps[15].brand}</h3>
                                <p style={p_Style}>{dataCaps[15].model}</p>
                                <b style={b_style}>{dataCaps[15].price}c</b>
                            </div>
                        </div>
                    </div>
            </div>
        <Footer />
    </div>
  )
}

export default Newera


