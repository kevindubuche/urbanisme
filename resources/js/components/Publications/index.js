import React from 'react';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import direction from './marc.jpg';

import TabKonbit from './TabKonbit';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from '../Style/GeneralJSX';
import data from './Konbit.json';
import {useSelector} from 'react-redux';

export default function Konbit() {
  const store = useSelector(store=>store);
  const TEXT = store.langue.item == '1' ?data.francais : data.creole;

  const classes = useStyles();
  const style ={
    image: {
      
        width: '100%',
        height: '10%',
        padding :'3%',
    }
}

  return (
    <div className={classes.root} >
      <Divider />
      <div >
        <ExpansionPanelSummary
      
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>U R B A T e R</Typography>
          </div>
        
        </ExpansionPanelSummary>
  
        <Divider />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
        
          <Divider />
                   <TabKonbit />
            </Grid>
            
         </Grid>
      </div>
    </div>
  );
}
