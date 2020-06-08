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
import Cours from './Cours';
import fondation from '../images/direction.jpg';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../Style/GeneralJSX';
import data from './Cheminement.json';
import {useSelector} from 'react-redux';
export default function Fondation() {
  const store = useSelector(store => store);
  console.log(store.langue);
   const TEXT = store.langue.item == '1' ?data.francais : data.creole;
 
  const classes = useStyles();
  const style ={
    image: {
      
        width: '100%',
        height: '10%'
    }
}

  return (
    <div className={classes.root} >
      <Divider />
      <div >
        <ExpansionPanelSummary    >
          <div className={classes.column}>
            <Typography  variant="h5" className={classes.title}>{TEXT.title}</Typography>
          </div>
        
        </ExpansionPanelSummary>
  
        
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              
            <Paper>
                <img src={fondation}  style={style.image}/>
                 </Paper>
       
            </Grid>
            <Grid item xs={12} sm={6}>
  
                <div className={classes.body}>{TEXT.body}</div>
            </Grid>
            
         </Grid>
         
          <Grid container spacing={1} style={{paddingTop:60}}>
            <Grid item xs={12} sm={6}>
                <Cours />
           </Grid>
            <Grid item xs={12} sm={6}>
            <Cours />
            </Grid>
            <Grid item xs={12} sm={12} style={{paddingTop:20}}>
            <a href="/files/formulaire.pdf" target='_blank'>   
                <Button  variant="contained" color="primary" >{TEXT.button}</Button>
          </a>
            </Grid>
           
         </Grid>
      </div>
    </div>
  );
}