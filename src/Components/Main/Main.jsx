import React from 'react';

/* Components */
import MainHeader from './MainHeader';
import MainMenu from './MainMenu';
import Card from './Card';

/* Styles */
import './main.css';

/* Images */
import arrow from '../../Images/next.png';

function Main () {



    return(
        <div className='main-container'>
            <MainHeader></MainHeader>
            <MainMenu></MainMenu>
            <div className='div-smallHeader-cards'>
                <div className='main-smallHeader'>
                    <p>729 Darwins encontrados</p>
                    <div className='div-arrows'>
                        <div className='div-singleArrowLeft'>
                            <img alt='icon arrow left' className='arrowLeft' src={arrow}></img>
                        </div>
                        <div className='div-singleArrow'>
                            <img alt='icon arrow right' className='arrowRight' src={arrow}></img>
                        </div>
                    </div>
                </div>
                <div className='container-cards'>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
    )
}

export default Main;