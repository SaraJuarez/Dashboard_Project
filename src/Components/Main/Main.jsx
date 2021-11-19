import React from 'react';

/* Components */
import MainHeader from './MainHeader';

/* Styles */
import './main.css';

function Main () {



    return(
        <div className='main-container'>
        <MainHeader></MainHeader>
        <p>Contenido</p>
        </div>
    )
}

export default Main;