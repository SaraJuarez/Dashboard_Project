import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';

/* Components */
import TopMenu from '../TopMenu/TopMenu';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

/* Images */
import {ReactComponent as GreyPoint} from '../../Images/all-darwins-icon.svg';

/* Styles */
import './layout.css';

const drawerWidth = 240;

 const MainStyle = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
); 

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  flexDirection: 'row'
}));

export default function Layout() {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    if(open === true) {
      setOpen(false);
    } else if (open === false) {
      setOpen(true)
    }
  };


  return (
    <div className='all-container'>
        <TopMenu open={open} handleDrawerOpen={handleDrawer}></TopMenu>
        <div className='div-mainContainer'>
          {open === true ?
            <div className='div-sidebar'>
              <Sidebar></Sidebar>
          </div>
          : null
          }
          
          <div className='div-main'>
            <Main></Main>
          </div>
        </div>
       


    </div>
  );
}
