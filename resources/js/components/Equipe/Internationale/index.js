import React from 'react';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import fondation from '../images/prof.jpg';
import ListProfs from './ListProfs';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from '../../Style/GeneralJSX';

export default function Fondation() {
  
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
    <div className={classes.root} id="fondation">
      <Divider />
      <div >
        <ExpansionPanelSummary
        
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>U R B A T E R</Typography>
          </div>
        
        </ExpansionPanelSummary>
  
        <Divider />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              
                <ListProfs/>
       
            </Grid>
            <Grid item xs={12} sm={6}>
            <ListProfs/>
            </Grid>
            
         </Grid>
         <Divider /><Divider /><Divider />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={3}>
              
               {image}
           </Grid>
            <Grid item xs={12} sm={3}>
            <Paper>
                <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={3}>
                {/* <img style={{height:'200px',width:'200px' , padding:'15px'}} src={require('../images/prof.jpg')} /><br /> */}
                {image}
           </Grid>
            <Grid item xs={12} sm={3}>
            <Paper>
                <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </Paper>
            </Grid>
         </Grid>

         <Grid container spacing={1}>
            <Grid item xs={12} sm={3}>
            {image}
           </Grid>
            <Grid item xs={12} sm={3}>
            <Paper>
                <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </Paper>
            </Grid>
            
            <Grid item xs={12} sm={3}>
            {image}
           </Grid>
            <Grid item xs={12} sm={3}>
            <Paper>
                <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </Paper>
            </Grid>
         </Grid>
      </div>
    </div>
  );
}
