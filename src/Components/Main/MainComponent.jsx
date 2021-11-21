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
    let arrayColorTest = [
        {
            color: '#d267c6',
            value: 180.22
        },
        {
            color: '#efaa42',
            value: 143.96
        },
        {
            color: '#fb6533',
            value: 129.32
        },
        {
            color: '#bca5d1',
            value: 210.67
        },
        {
            color: '#57737A',
            value: 98.75
        },

    ]
    const [view, setView] = useState('container-cards-wrap');
    const [state, setState] = useState(arrayColorTest)

    function changeView (e) {
        let state = e.currentTarget.id;
        setView(state)
    }

    function arrayPlus () {
        let newArray = state;
        let arrayLength = newArray.length
        let lastElementIndex = arrayLength-1;
        let lastElement = newArray[lastElementIndex]
        newArray.pop()
        newArray.unshift(lastElement)
        setState([...newArray])
    }

    function arrayLess (array) {
        let newArray = state;
        let lastElement = newArray[0]
        newArray.shift()
        newArray.push(lastElement)
        setState([...newArray])
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
                        <div onClick={arrayLess} className='div-singleArrowLeft'>
                            <img alt='icon arrow left' className='arrowLeft' src={arrow}></img>
                        </div>
                        <div onClick={arrayPlus} className='div-singleArrow'>
                            <img alt='icon arrow right' className='arrowRight' src={arrow}></img>
                        </div>
                    </div>
                </div>
                <div className={view}>
                {state !== undefined ? 
                state.map((element, index) => {
                    return(
                        <Card color={element.color} value={element.value}></Card>
                    )
                    })
                : null}
                </div>
            </div>
        </div>
    )
}

export default Main;