import React from 'react';
import {ReactComponent as DarwinexLogo} from '../../Images/logo darwinex.svg';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
/* Estilos */
import './topMenu.css';

function TopMenu (props) {



    return (
        <div className='topMenu-container'>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(props.open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
            <DarwinexLogo></DarwinexLogo>
        </div>
    )
}

export default TopMenu;