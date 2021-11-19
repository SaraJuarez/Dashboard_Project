import React from 'react';

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
                    <p>Nombre de usuario</p>
                </div>

            </div>
            <p className='mainHeader-description'>TSM is absolutely passionate about automated, systematic trading, and to drive system lorem ipsum dolor sit amet… </p>
        </div>
    )
}

export default MainHeader;