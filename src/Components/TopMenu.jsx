import React from 'react';
import {ReactComponent as DarwinexLogo} from '../Images/logo darwinex.svg';

/* Estilos */
import './topMenu.css';

/* Images */
import burguerMenu from '../Images/menu-button-of-three-horizontal-lines.png';

function TopMenu () {



    return (
        <div className='topMenu-container'>
            <div className='topMenu-divButton'>
                <img alt='icon burguer menu' className='burguerMenu-img' src={burguerMenu}></img>
            </div>
            <div className='topMenu-divLogo'>
                <DarwinexLogo></DarwinexLogo>
            </div>
        </div>
    )
}

export default TopMenu;