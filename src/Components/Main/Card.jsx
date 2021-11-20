import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import FakeChart from './FakeChart';

import {ReactComponent as OwlIcon} from '../../Images/owl-icon.svg';
import {ReactComponent as FolderIcon} from '../../Images/folder-icon.svg';



import './card.css';

let arrayItems = [
    {
        text: 'capital invertido',
        value: '$ 1600.00',
        color: '#fff'
    },
    {
        text: 'retorno',
        value: '7%',
        color: '#af0'
    },
    {
        text: 'drawdown',
        value: '-37.0%',
        color: '#ff4141'
    },
    {
        text: 'score',
        value: '78.2',
        color: '#ffffff'
    },

]

export default function BasicCard(props) {
  return (
    <Card className='card-body' sx={{ minWidth: 268 }}>
      <CardContent>
        <div className='card-mainContent'>
            <div className='headerCard-div'>
                <div className='headerCard-firstBlock'>            
                    <div style={{
                    backgroundColor: props.color,
                    }}   
                    className='div-s'><p>p</p></div>
                    <p className='second-item'>BWE</p>
                    <p className='third-item'>#12</p>
                </div>
                <div className='headerCard-secondBlock'>            
                    <p className='secondBlock-firstItem'>180.22</p>
                    <p className='secondBlock-secondItem'>TRADE</p>
                </div>

            </div>
            <FakeChart color={props.color}></FakeChart>
            <div className='div-footer-graph'>
                <FolderIcon></FolderIcon>
                <div className='hexagon'><p>4</p></div>
            </div>
        </div>
        <List>
      {arrayItems.map((element, index) => (
            <ListItem className='listItem-card' button key={element.text}>
              <ListItemText className='card-itemName'>
                {element.text}
              </ListItemText>
              <ListItemText 
                style={{
                color: element.color,
                }}  
                className={element.text === 'score' ? 'card-itemValueScore' :'card-itemValue'}>
                {element.text === 'score' ? 
                <OwlIcon className='owlIcon'></OwlIcon>
                : null}
                {element.value}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
