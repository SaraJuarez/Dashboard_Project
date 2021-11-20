import React, {useState} from 'react';

/* Components */
import MainHeader from './MainHeader';
import MainMenu from './MainMenu';
import Card from './Card';
import Divider from '@mui/material/Divider';

/* Styles */
import './main.css';

/* Images */
import arrow from '../../Images/next.png';

function Main () {

    const [view, setView] = useState('container-cards-wrap');

    let arrayColor = [
        '#d267c6',
        '#efaa42',
        '#fb6533',
        '#bca5d1',
        '#57737A'
    ]

    function changeView (e) {
        let state = e.currentTarget.id;
        setView(state)
    }

    return(
        <div className='main-container'>
            <MainHeader></MainHeader>
            <Divider className='divider' />
            <MainMenu view={view} changeView={changeView}></MainMenu>
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
                <div className={view}>
                {arrayColor.map((element, index) => (
                    <Card color={element}></Card>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Main;