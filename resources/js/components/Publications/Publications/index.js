import React from 'react';

import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';

import TabPublications from './TabPublications';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../Style/GeneralJSX';
import data from './Publications.json';
import {useSelector} from 'react-redux';
export default function Direction() {
  const store = useSelector(store =>store);
  const TEXT = store.langue.item == '1' ? data.francais : data.creole;

  const classes = useStyles();
  const style ={
    image: {
      
        width: '100%',
        height: '10%',
    }
}

  return (
    <div className={classes.root} id="direction">
      <Divider />
      <div >
        <ExpansionPanelSummary  >
          <div className={classes.column}>
            <Typography className={classes.title}>{TEXT.title}</Typography>
          </div>
        
        </ExpansionPanelSummary>
  
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
                   <TabPublications />
            </Grid>
            
         </Grid>
      </div>
    </div>
  );
}
