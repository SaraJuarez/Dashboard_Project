import React from 'react';
import {ReactComponent as DarwinexLogo} from '../../Images/logo darwinex.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

/* Estilos */
import './topMenu.css';

function TopMenu (props) {
  console.log(props)

  React.useEffect(() => {
    
  }, [props.open])




    return (
        <div className='topMenu-container'>
            {props.open === true ? 
            <CloseIcon onClick={props.handleDrawerClose}
            className='iconButton'></CloseIcon>
            :
            <MenuIcon onClick={props.handleDrawerOpen} className='iconButton' />
            }
            <DarwinexLogo></DarwinexLogo>
        </div>
    )
}

export default TopMenu;