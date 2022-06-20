import React from 'react';
import Switcher from '../Switcher';
import './Catalog.css';
import DropDown from './DropDown';
import { useState } from 'react'
import Popular from './Popular';
import dataCaps from '../data/data';
import Navbar from '../NAVBAR/Navbar';
import Footer from '../FOOTER/Footer';
import Signup from '../../AUTH/Signup';





const options = ['Категории','Популярные', "Сначала дешевые", "Сначала дорогие", 'Новинки'];


function Catalog() {
    const [selected, setSelected] = useState(options[0])






    const [data, setData] = useState(dataCaps)



    return (
        <div className='Catalog'>
            <Navbar />
            <Switcher />
            <div className='first-section'>
                <div className='first-section-text'>
                    <div className='generalText'>
                        <p>
                            НОВАЯ СЕРИЯ
                            <br />
                            McLAREN
                        </p>
                    </div>
                    <div className='bunner'>
                        <img className='banner' src='/img/bunner.jpg' alt='Bunner' />
                    </div>
                </div>
            </div>
            {/* DROPDOWN */}
            <form className='form-dropdown'>
                <DropDown selected={selected} setSelected={setSelected} options={options} data={data} setData={setData} />
            </form>
            {/* THE DATA OF THE CAPS */}
            <Popular data={data} />
            {/* NUMBERS */}
            <div className='numbers-switcher'>
                <a href='/Morecaps'><div>1</div></a>
                <a href='/Morecaps'><div>2</div></a>
                <a href='/Morecaps'><div>3</div></a>
                <a href='/Morecaps'><div>4</div></a>
                <a href='/Morecaps'><div>5</div></a>
                <div>
                    <img src='/images/switcher-ahead.svg' alt='' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Catalog;