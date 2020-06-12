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
            <Typography className={classes.title} style={{marginLeft:'-25px'}}>{TEXT.title}</Typography>
          </div>
        
        </ExpansionPanelSummary>
  
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6} className={classes.body}> 
              
              {TEXT.body1}
          </Grid>
           <Grid item xs={12} sm={6} className={classes.body}> 
              
              {TEXT.body2}
          </Grid>

          <ExpansionPanelSummary >
          <div className={classes.column} style={{paddingTop:40}}>
            <Typography className={classes.title} style={{marginLeft:'-15px'}}>{TEXT.title2}</Typography>
          </div>
           
        
        </ExpansionPanelSummary>
         </Grid>
         <Grid container spacing={3}>
         <Grid item xs={12} sm={6} className={classes.body}> 
              
              {TEXT.body3}
          </Grid>
           <Grid item xs={12} sm={6} className={classes.body}> 
              
              {TEXT.body4}
          </Grid>
         
         </Grid>
      </div>
    </div>
  );
}
