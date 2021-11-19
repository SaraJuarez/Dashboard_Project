import React from 'react';

/* Styles */
import './sidebar.css';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

/* Images */
import {ReactComponent as ExploreIcon} from '../../Images/explorar-icon.svg';
import {ReactComponent as AllDarwinsIcon} from '../../Images/all-darwins-icon.svg';
import {ReactComponent as DarwiniaIcon} from '../../Images/darwinia-icon.svg';
function Sidebar () {

    let arrayItems = [
        {
            text: 'Explorar',
            icon: <ExploreIcon></ExploreIcon>
        },
        {
            text:'All Darwins',
            icon: <AllDarwinsIcon></AllDarwinsIcon>
        },
        {
            text: 'Darwinia',
            icon: <DarwiniaIcon></DarwiniaIcon>
        }
    ]


    return(
        <div className='container-sidebar'>
            <List>
            <div className='sidebar-titleDiv'>
              <div className='pointsContainer'>
                <div className='column'>
                  <AllDarwinsIcon className='point'></AllDarwinsIcon>
                  <AllDarwinsIcon className='point'></AllDarwinsIcon>
                  <AllDarwinsIcon className='point'></AllDarwinsIcon>
                </div>
                <div className='column'>
                  <AllDarwinsIcon className='point'></AllDarwinsIcon>
                  <AllDarwinsIcon className='point'></AllDarwinsIcon>
                  <AllDarwinsIcon className='point'></AllDarwinsIcon>
                </div>
              </div>
              <p className='mainContainer-title'>Principal</p>
            </div>
          {arrayItems.map((element, index) => (
            <ListItem button key={element.text}>
              <ListItemIcon className='sidebar-icon'>
                {element.icon}
              </ListItemIcon>
              <ListItemText className='sidebar-textElement' primary={element.text} />
            </ListItem>
          ))}
        </List>
        </div>

    )
}

export default Sidebar;