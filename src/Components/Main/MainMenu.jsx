import React from 'react';
import Switch from '@mui/material/Switch';

import {ReactComponent as CardsIcon} from '../../Images/card-icon.svg';
import {ReactComponent as ListIcon} from '../../Images/list-icon.svg';
import arrowDown from '../../Images/arrow-down-sign-to-navigate.png';

/* Styles */
 import './mainMenu.css';
 
function MainMenu () {



    return(
        <div className='mainMenu-container'>
            <div className='mainMenu-buttonsDiv'>
                <div className='div-listIcon'>
                    <ListIcon className='listIcon'></ListIcon>
                </div>
                <div className='div-cardsIcon'>
                    <CardsIcon className='cardsIcon'></CardsIcon>
                </div>
                <div className='switch-div'>
                    <p>In portfolio</p>
                    <Switch size="small"></Switch>
                </div>
            </div>
            <div className='mainMenu-dropDown'>
                <p>Order by Return</p>
                <img className='arrowDown' src={arrowDown}></img>
            </div>
        </div>

    )
}

export default MainMenu;