import React from 'react';

/* Styles */
import './mainHeader.css';

function MainHeader () {


    return(
        <div className='mainHeader-container'>
            <div className='mainHeader-firstBlock'>
                <div className='mainHeader-circle'>
                    <p>AIS</p>
                </div>
                <div className='mainHeader-title'>
                    <small>Estrategia nombre</small>
                    <div className='mainHeader-userName'>
                        <p>Nombre de usuario</p>
                        <div className='div-number'>+2</div>
                    </div>
                </div>

            </div>
            <p className='mainHeader-description'>TSM is absolutely passionate about automated, systematic trading, and to drive system lorem ipsum dolor sit amet… </p>
        </div>
    )
}

export default MainHeader;