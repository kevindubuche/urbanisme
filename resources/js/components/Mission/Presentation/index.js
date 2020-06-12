import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

import presentation from '../images/presentation.jpg';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../Style/GeneralJSX';

import data from './Presentation.json';
import {useSelector} from 'react-redux';

export default function Presentation() {
  const store = useSelector(store => store);
  const TEXT = store.langue.item == '1' ?data.francais : data.creole;
  const classes = useStyles();
  const style ={
    image: {
      
        width: '100%',
        height: '10%',
        // padding :'3%',
    }
}

  return (
    <div className={classes.root} id="presentation">
      <Divider />
      <div >
        <ExpansionPanelSummary >
          <div className={classes.column}>
            
          </div>
        
        </ExpansionPanelSummary>
  
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Paper>
                <img src={presentation} style={style.image}/>
                 </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant="h5"  className={classes.title}>{TEXT.title}</Typography>
                <div  className={classes.body} >{TEXT.body}</div>
             
            </Grid>
            
         </Grid>
      </div>
    </div>
  );
}
