import React from 'react';

import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';

import TabAnnonces from './TabAnnonces';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../Style/GeneralJSX';

export default function Direction() {
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
            <Typography className={classes.title}>ANNONCES</Typography>
          </div>
        
        </ExpansionPanelSummary>
  
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
                   <TabAnnonces />
            </Grid>
            
         </Grid>
      </div>
    </div>
  );
}
