import React, {useEffect} from 'react';
import Switch from '@mui/material/Switch';

import {ReactComponent as CardsIcon} from '../../Images/card-icon.svg';
import {ReactComponent as ListIcon} from '../../Images/list-icon.svg';
import arrowDown from '../../Images/arrow-down-sign-to-navigate.png';

/* Styles */
 import './mainMenu.css';
 
function MainMenu (props) {

    useEffect(() => {
        let buttonList = document.getElementById('container-cards-column');
        let buttonCards = document.getElementById('container-cards-wrap');
        if(props.view === 'container-cards-column') {
            buttonCards.classList.remove('div-cardsIcon-active');
            buttonCards.classList.add('div-cardsIcon')
            buttonList.classList.remove('div-listIcon')
            buttonList.classList.add('div-listIcon-active')
        } else if(props.view === 'container-cards-wrap') {
            buttonList.classList.remove('div-listIcon-active')
            buttonList.classList.add('div-listIcon')
            buttonCards.classList.remove('div-cardsIcon')
            buttonCards.classList.add('div-cardsIcon-active')
        }
    }, [props.view])

    return(
        <div className='mainMenu-container'>
            <div className='mainMenu-buttonsDiv'>
                <div onClick={props.changeView} id='container-cards-column' className='div-listIcon'>
                    <ListIcon></ListIcon>
                </div>
                <div onClick={props.changeView} id='container-cards-wrap' className='div-cardsIcon-active'>
                    <CardsIcon></CardsIcon>
                </div>
                <div className='switch-div'>
                    <p>In portfolio</p>
                    <Switch size="small"></Switch>
                </div>
            </div>
            <div className='mainMenu-dropDown'>
                <p>Order by Return</p>
                <img alt='arrow dropdown' className='arrowDown' src={arrowDown}></img>
            </div>
        </div>

    )
}

export default MainMenu;