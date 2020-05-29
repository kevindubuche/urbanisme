import React from 'react';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import partenaires from '../images/partenaires.png';
import logo from '../images/logo.png';
import Link from '@material-ui/core/Link';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../Style/GeneralJSX';
import data from './Stage.json';
import {useSelector } from 'react-redux';

export default function Partenaires() {
  const store = useSelector(store => store);
  const TEXT = store.langue.item == '1' ? data.francais : data.creole;
  const classes = useStyles();
  const style ={
    image: {
      
        width: '100%',
        height: '10%',
        paddingRight :'5%',
    }
}

  return (
    <div className={classes.root} id="partenaires">
     
      <Divider />
      <div >
        <ExpansionPanelSummary  >
          <div className={classes.column}>
            <Typography className={classes.heading}>U R B A T e R</Typography>
          </div>
        
        </ExpansionPanelSummary>
  
        <Divider />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Paper>
                <img src={partenaires}  style={style.image}/>
                 </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.title}>
             {TEXT.title}
             
            </Typography>
                <div className={classes.body}>{TEXT.body}</div>    
            </Grid>
            
         </Grid>
      </div>
      <br />
        <Divider />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <Paper>
              <Link href="https://www.google.com" ><img src={logo}  width={100} height={100} style={{borderRadius:50}}/></Link> 
                <div className="card-body">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</div>
                 <Divider />
                 <Link href="https://www.google.com" ><img src={logo}  width={100} height={100} style={{borderRadius:50}}/></Link> 
                <div className="card-body">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</div>
               
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper>
                <Link href="https://www.google.com" ><img src={logo}  width={100} height={100} style={{borderRadius:50}}/></Link> 
                <div className="card-body">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</div>
                 <Divider />
                 <Link href="https://www.google.com" ><img src={logo}  width={100} height={100} style={{borderRadius:50}}/></Link> 
                <div className="card-body">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</div>
                 </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper>
                <Link href="https://www.google.com" ><img src={logo}  width={100} height={100} style={{borderRadius:50}}/></Link> 
                <div className="card-body">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</div>
                 <Divider />
                 <Link href="https://www.google.com" ><img src={logo}  width={100} height={100} style={{borderRadius:50}}/></Link> 
                <div className="card-body">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</div>
                 </Paper>
            </Grid>
         </Grid>
    
    </div>
  );
}
