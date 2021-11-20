import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

import {ReactComponent as OwlIcon} from '../../Images/owl-icon.svg';


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

export default function BasicCard() {
  return (
    <Card className='card-body' sx={{ minWidth: 268 }}>
      <CardContent>
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
