import React from 'react';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import fondation from '../images/prof.jpg';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from '../../Style/GeneralJSX';

import data from './Internationale.json';
import {useSelector} from 'react-redux';
export default function Fondation() {
  const store = useSelector(store => store);
  const TEXT = store.langue.item == '1' ?data.francais : data.creole;
  const classes = useStyles();
  const style ={
    image: {
      
        width: '100%',
        height: '10%',
        padding :'3%',
    }
}
const image = <AccountCircleIcon style={{height:'200px',width:'200px' , padding:'15px', color:"gray"}}/>
  return (
    <div className={classes.root} >
      <Divider />
      <div >
        <ExpansionPanelSummary
        
        >
          <div className={classes.column}>
            <Typography className={classes.title}>{TEXT.title}</Typography>
          </div>
        
        </ExpansionPanelSummary>
  
          <Grid container spacing={1}>
          <Grid item xs={12} sm={12} className={classes.body}> 
              
              {TEXT.body}
          </Grid>

          <ExpansionPanelSummary >
          <div className={classes.column} style={{paddingTop:40}}>
            <Typography className={classes.title}>{TEXT.title2}</Typography>
          </div>
        
        </ExpansionPanelSummary>
         
         </Grid>
      </div>
    </div>
  );
}
